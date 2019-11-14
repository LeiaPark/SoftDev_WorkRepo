from flask import Flask, render_template
import urllib2, json
app = Flask(__name__)

@app.route("/")
def root():
  u = urllib2.urlopen(
    https://restcountries.eu/rest/v2
  )
  response = u.read()
  data = json.loads( response )
  return render_template("index.html", country = data['name'], place = data['subregion'])

if __name__ == "__main__":
  app.run(debug = True)
