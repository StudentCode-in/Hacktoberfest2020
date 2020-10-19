import src.utils.files_manager as fm
import argparse
from src.flask_server.server import serve

parser = argparse.ArgumentParser(description='Serve tensorflow models')

parser.add_argument('--copy-model',help='Copy a pb folder to the models folder.')
parser.add_argument('--generate-config',help='Copy a pb folder to the models folder.', action='store_true')
parser.add_argument('--serve',help='Copy a pb folder to the models folder.', action='store_true')
parser.add_argument('--generate-config-path',help='Copy a pb folder to the models folder.')
parser.add_argument('--name',help='Name of the model.')

args = parser.parse_args()

if args.copy_model and args.name:
    fm.add_model_dir(args.copy_model, args.name)
elif args.generate_config: 
    fm.generate_model_config()
elif args.generate_config_path: 
    fm.generate_model_config(args.generate_config_path)
elif args.serve: 
   serve() 