from src.flask_server.server import serve_prod
    
app = serve_prod()

if __name__ == "__main__":
    app.run(host='0.0.0.0', port='4000', debug=False)