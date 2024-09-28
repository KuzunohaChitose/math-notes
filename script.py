from flask import Flask, redirect, send_from_directory
import sys
import shutil
import os

def run_server():
    app = Flask(__name__, static_folder="docs", static_url_path="/math-notes")

    @app.route("/")
    def index():
        return redirect("/math-notes", code=302)

    @app.route("/math-notes")
    def home1():
        return send_from_directory(directory="docs", path="index.html")
    
    @app.route("/math-notes/")
    def home2():
        return send_from_directory(directory="docs", path="index.html")

    app.run(host="0.0.0.0")

def run_move():
    src = './notes/.vitepress/dist'
    dst = './docs'
    if os.path.exists(dst):
        shutil.rmtree(dst)
    shutil.move(src, dst)


if __name__ == "__main__":
    cmd = sys.argv[1]
    if cmd == "server":
        run_server()
    elif cmd == "move":
        run_move()
    else:
        ...