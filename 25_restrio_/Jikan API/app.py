from flask import Flask, render_template
import urllib2, json
app = Flask(__name__)

@app.route("/")
def root():
  u = urllib2.urlopen(
    https://api.jikan.moe/v3/anime/21/episodes/1
  )
  response = u.read()
  data = json.loads( response )
  return render_template("index.html", text = data['title'])

if __name__ == "__main__":
  app.run(debug = True)
