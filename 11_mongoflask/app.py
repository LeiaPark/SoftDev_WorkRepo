from flask import Flask, render_template, request, redirect, url_for, session
from utl.roles import ID
from utl.senators import gender, state, party, website, description
import senators, roles

app = Flask(__name__)

@app.route("/")
def main():
    return render_template("index.html")

@app.route("/roles")
def roles():
    if "number" in request.args:
        return render_template("roles.html", role=roles.ID(request.args["number"]))
    return render_template("roles.html")

@app.route("/senators")
def senators():
    gender = ""
    state = ""
    party = ""
    first = ""
    last = ""
    if "state" in request.args:
        state = senators.state(request.args["state"])
    if "party" in request.args:
        party = senators.party(request.args["party"])
    if "gender" in request.args:
        gender = senators.gender(request.args["gender"])
    if "fname" in request.args:
        first = senators.website(request.args["first"])
    if "lname" in request.args:
        last = senators.description(request.args["last"])

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0')
