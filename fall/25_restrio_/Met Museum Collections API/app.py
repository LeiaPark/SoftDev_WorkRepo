from flask import Flask, render_template
import urllib2, json
app = Flask(__name__)

@app.route("/")
def root():
  u = urllib2.urlopen(
    https://collectionapi.metmuseum.org/public/collection/v1/objects/207753
  )
  response = u.read()
  data = json.loads( response )
  return render_template("index.html",
                         pic = data['primaryImage'],
                         title = data['title'])

if __name__ == "__main__":
  app.run(debug = True)
