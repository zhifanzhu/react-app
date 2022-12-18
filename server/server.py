from flask import Flask
from flask import request, jsonify
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app = Flask(__name__)

@app.route("/data")
@cross_origin()
def data():
    return jsonify("<p>Data!</p>")

@app.route("/upload", methods=['POST'])
@cross_origin()
def upload():
    if request.method == 'POST':
        print(request)
        return jsonify({})
        # return do_the_login()
