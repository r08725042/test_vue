from flask import Flask, render_template
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# app.debug = True
@app.route("/")
def index():

    return render_template("index.html", **{'gg': 'Hello from frame good cyaho!'})


if __name__ == '__main__':
    app.run(debug = True)