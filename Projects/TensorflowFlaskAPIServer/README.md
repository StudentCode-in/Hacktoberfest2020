# TensorflowFlaskAPIServer
Flask server with some utils to generate and serve tensorflow models.

# Structure

    /
        models                  # Folder to storage copied models.
        src/
            flask_server/       # Flask server init configuration
            utils/              # Utility methods for management of models
        tensorflow-serve.sh     # Command for start docker iamges of tensorflow server

# Usage

Copy model exported folders by save model and variables of tensorflow.
`python3 main.py --copy-model [model_folder_path] --name [model_name]`

Create protobuff configuration for multiple models over tensorflow-serve
`python3 main.py --generate-config`

Create protobuff configuration for multiple models over tensorflow-serve, with an specific path
usefull with docker images.
`python3 main.py --generate-config-path [path]`

Run flask server
`python3 main.py --serve`

# References

Tensorflow Serve [https://www.tensorflow.org/tfx/serving/serving_basic]
