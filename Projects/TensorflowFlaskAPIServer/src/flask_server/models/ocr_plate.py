import numpy as np
from PIL import Image
import itertools

big_letters = list(range(ord('A'), ord('Z')+1))
digits = list(range(ord('0'), ord('9')+1))
separator = ord("-")
alphabet = big_letters + digits
alphabet.append(separator)

__MODEL_NAME__ = 'ocr_plate:predict'

def labels_to_text(labels):
    ret = []
    for c in labels:
        if c == len(alphabet):
            ret.append("")
        else:
            ret.append(chr(alphabet[c]))
    return "".join(ret)

def decode_batch(out):
    ret = []
    out = np.array(out)
    for j in range(out.shape[0]):
        out_best = list(np.argmax(out[j, 2:], 1))
        out_best = [k for k, g in itertools.groupby(out_best)]
        outstr = labels_to_text(out_best)
        ret.append(outstr)
    return ret

def generate_input(path, size=(200, 50)):
    img = Image.open(path).resize(size)
    img = np.array(img.convert('L'))
    img = img.astype(np.float32) / 255
    img = np.expand_dims(img, 0)
    x = np.ones([1, 200, 50, 1])
    x[0, 0:200, :, 0] = img[0, :, :].T
    return {
        "signature_name": "predict",
        "inputs": x.tolist()
    }