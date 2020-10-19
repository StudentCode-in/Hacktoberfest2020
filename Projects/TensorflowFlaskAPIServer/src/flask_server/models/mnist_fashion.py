import numpy as np
from PIL import Image
import itertools
from keras.applications.mobilenet import preprocess_input as mpi

labels = ["T-shirt", "Trouser", "Pullover", "Dress", "Coat", "Sandal", "Shirt", "Sneaker", "Bag", "Ankle boot"]
input_size = (96, 96)

def decode_output(output):
    better_index = np.argmax(output)
    others = []
    for value, label in zip(output, labels):
        others.append((value, label))
    return  {
        "label": (output[better_index], labels[better_index]),
        "others": others
    }

def preprocess_image(path):
    x = []
    image = Image.open(path).convert('L').resize((28, 28))
    image = image.resize((input_size))
    image.save(path+".jpg")
    image = np.array(image)
    if len(image.shape) < 3: 
        image = np.stack((image,)*3, axis=-1)
    x.append(image)
    x = mpi(np.array(x))
    return x
    

def generate_input(path, input_data):
    return {
        "signature_name": "predict",
        "inputs": np.array(input_data).tolist() 
    }