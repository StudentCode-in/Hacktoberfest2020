import argparse
import json

import numpy as np
import requests
from PIL import Image
import itertools

big_letters = list(range(ord('A'), ord('Z')+1))
digits = list(range(ord('0'), ord('9')+1))
separator = ord("-")
alphabet = big_letters + digits
alphabet.append(separator)

def labels_to_text(labels):
    ret = []
    for c in labels:
        if c == len(alphabet):  # CTC Blank
            ret.append("")
        else:
            ret.append(chr(alphabet[c]))
    return "".join(ret)

def decode_batch(out):
    #out = test_func([word_batch])[0]
    ret = []
    for j in range(out.shape[0]):
        out_best = list(np.argmax(out[j, 2:], 1))
        out_best = [k for k, g in itertools.groupby(out_best)]
        outstr = labels_to_text(out_best)
        ret.append(outstr)
    return ret

# Argument parser for giving input image_path from command line
ap = argparse.ArgumentParser()
ap.add_argument("-i", "--image", required=True,
                help="path of the image")
args = vars(ap.parse_args())

image_path = args['image']
# Preprocessing our input image
img = Image.open(image_path).resize((200, 50))
img = np.array(img.convert('L'))
img = img.astype(np.float32) / 255
img = np.expand_dims(img, 0)

# this line is added because of a bug in tf_serving(1.10.0-dev)
img = img.astype('float16')
X_data = np.ones([1, 200, 50, 1])
X_data[0, 0:200, :, 0] = img[0, :, :].T

payload = {
    "signature_name": "predict",
    "inputs": X_data.tolist()
}

# sending post request to TensorFlow Serving server
r = requests.post('http://localhost:8501/v1/models/ocr_plate:predict', json=payload)
pred = json.loads(r.content.decode('utf-8'))

# Decoding the response
# decode_predictions(preds, top=5) by default gives top 5 results
# You can pass "top=10" to get top 10 predicitons
print(decode_batch(np.array(pred['outputs'])))  