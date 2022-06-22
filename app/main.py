from flask import Flask, render_template

from tagsrv import tagsrv_status


def create_app():
    app = Flask(__name__, template_folder='templates')
    return app


app = create_app()


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route('/tagsrv')
def tag_srv_status():
    ts = tagsrv_status()
    return render_template('tagsrv.html', ts=ts)


if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0')
