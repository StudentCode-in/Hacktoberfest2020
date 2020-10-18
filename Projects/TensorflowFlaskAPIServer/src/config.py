import os

def safe_read_os_env(variable, default=""):
    return os.environ[variable] if variable in os.environ else default

config = {
    "model_folder": safe_read_os_env("MODEL_FOLDER", "./models"),
    "model_sufix": safe_read_os_env("MODEL_SUFIX", "pb"),
    "tensorflow_serve_url": safe_read_os_env("TENSORFLOW_SERVE_URL", "http://localhost:8501/v1/models/")
}

