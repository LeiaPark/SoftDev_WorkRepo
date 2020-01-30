from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/") #assign following fxn to run when root route requested
def hello_world():
  return "No hablo queso!"

@app.route("/booyah")
def booyah_world():
  return "je m'appelle fromage!"

@app.route("/weird")
def weird_world():
  return "hey cheese!"
  
  if __name__ == "__main__":
  	app.debug = True
  	app.run()

