# Leia Park & Tammy Chen
# SoftDev1 pd9
# K12 -- Echo Echo Echo
# 2019-09-26

from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("request.html") #displays the form

@app.route("/auth")
def authenticate():
    #redirect to the response.html & input the parameters
    return render_template(
        'response.html',
        username = request.args['username'],
        method = request.method
    )

if __name__ == "__main__":
    app.debug = True
    app.run()
