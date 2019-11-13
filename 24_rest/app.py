from flask import Flask, render_template
import urllib2, json
app = Flask(__name__)

@app.route("/")
def root():
  u = urllib2.urlopen(
     https://api.nasa.gov/EPIC/api/natural?api_key=0tEO0x8wwjWPesHB8EhfQHrYTlufad4Vckn1IEQn
  )
  response = u.read()
  data = json.loads( response )
  return render_template("index.html", pic = data['image'])

if __name__ == "__main__":
  app.run(debug = True)
