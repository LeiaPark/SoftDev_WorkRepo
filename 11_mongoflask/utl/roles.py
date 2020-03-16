from bson.json_util import loads
import pymongo
from pymongo import MongoClient

client = MongoClient()
db = client.computers # creates a database
collection = db.roles # adds a collection of roles

# read the data
if(collection.count()==0):
    file = open("roles.json", "r")
    content = loads(file.read())["objects"]
    for line in content:
        collection.insert_one(line)

# gets US senators of specified gender
def ID(number):
    return collection.find({"ID" : number})
