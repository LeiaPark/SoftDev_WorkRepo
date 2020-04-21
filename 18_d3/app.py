import csv

from flask import Flask
from flask import render_template
from flask import url_for
app = Flask(__name__)

filename = "cereal.csv"
fields = []
cerealsBeta = []
cereals = []
names = []
calories = []
protein = []
fat = []
fiber = []
sugars = []
potass = []
vitamins = []


with open(filename, 'r') as csvfile:
                csvreader = csv.reader(csvfile)
                fields = next(csvreader)
                fields = fields[0].split(';')
                for row in csvreader:
                        cerealsBeta.append(row)
                cerealsBeta.pop(0)
                indexes = [1, 2, 6, 8, 12, 13, 14, 15]
                for index in sorted(indexes, reverse=True):
                        del fields[index]
                for cereal in cerealsBeta:
                        for item in cereal:
                                item = item.split(';')
                                cereals.append(item)
                                names.append(item[0])
                                calories.append(item[3])
                                protein.append(item[4])
                                fat.append(item[5])
                                fiber.append(item[7])
                                sugars.append(item[9])
                                potass.append(item[10])
                                vitamins.append(item[11])


ulticereals = {}
data = {}
i = 0
while i < len(names):
     data["calories"] = calories[i]
     data["protein"] = protein[i]
     data["fat"] = fat[i]
     data["fiber"] = fiber[i]
     data["sugars"] = sugars[i]
     data["potass"] = potass[i]
     data["vitamins"] = vitamins[i]
     ulticereals[names[i]] = data
     i += 1
               
@app.route("/")
def root():
    return render_template("home.html", ulticereals = ulticereals, names = names)

if __name__ == "__main__":
    app.debug = True
    app.run()
