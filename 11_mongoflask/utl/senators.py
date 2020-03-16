from bson.json_util import loads
import pymongo
from pymongo import MongoClient

client = MongoClient()
db = client.computers # creates a database
collection = db.senators # adds a collection of senators

# read the data
if(collection.count()==0):
    file = open("senators.json", "r")
    content = loads(file.read())["objects"]
    for line in content:
        collection.insert_one(line)

# gets US senators of specified gender
def gender(gender):
    return collection.find({"person.gender" : gender}, {"person.name" : 1})

# gets US senators from specified state
def state(state):
    return collection.find({"state" : state}, {"person.name" : 1})

# gets US senators from specified party
def party(party):
    return collection.find({"party" : party}, {"person.name" : 1})

# gets the website of a specific US senator
def website(fname):
    return collection.find({"person.firstname" : fname}, {"person.name" : 1, "website" : 1})

# gets all related information of a specific US senator
def description(lname):
    return collection.find({"person.lastname" : lname}, {"person.name" : 1, "description" : 1})
