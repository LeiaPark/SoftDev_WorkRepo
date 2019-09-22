from flask import Flask, render_template
app = Flask(__name__)

@app.route("/") 
def hello_world():
  return "No hablo queso!"

@app.route("/my_foist_template")
def test_tmplt():
  return render_template(
    'test.html',
    foo="fooooo",
    something="something is amist"
  )
