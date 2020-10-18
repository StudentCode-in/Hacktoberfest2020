from flask import Blueprint, flash, request, redirect, jsonify
from src.flask_server.utils.request import allowed_file, generate_request
import src.flask_server.models.fashion_color as fc
import uuid
import os

model_routes = Blueprint('model_routes', __name__)

def handle_file_request(request):
    if 'file' not in request.files:
        flash('No file part')
    if 'model' not in request.form:
        flash('No model definition')
    if request.files['file'].filename == '':
        flash('No selected file')

def make_request(file, model, model_type):
    path = os.path.join('./tmp',  model + str(uuid.uuid1()))
    file.save(path)
    data = model_type.preprocess_image(path)
    payload = model_type.generate_input(path, data)
    os.remove(path)
    return generate_request(model, payload)

@model_routes.route('/api', methods=['POST'])
def make_file_predict_fashion_color():
    print("Executing ::::::", request.form['model'])
    handle_file_request(request)
    file = request.files['file']
    model = request.form['model']
    if file and allowed_file(file.filename):
        prediction = make_request(file, model, fc)
        pretty_response = fc.decode_output(prediction['outputs'][0])
        print("Response ::::::", prediction, pretty_response)
        return jsonify(pretty_response)
