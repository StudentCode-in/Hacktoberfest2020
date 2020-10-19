from flask import Flask
from flask_cors import CORS
from src.flask_server.routes import model_routes

def serve():
    print('Starting flask server')
    app = Flask(__name__)
    CORS(app)
    app.register_blueprint(model_routes)
    app.run(host='0.0.0.0', port='4000', debug=True)
    return app


def serve_prod():
    print('Starting flask server')
    app = Flask(__name__)
    CORS(app)
    app.register_blueprint(model_routes)
    return app