# Leia Park
# SoftDev1 pd9
# K#18: Average
# 2019-10-11

import sqlite3 #enable control of an sqlite database
import csv     #facilitate CSV I/O
import sys     #enable user interaction

DB_FILE="school.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

# setup
with open('students.csv', newline='') as fOpen:
     fInside = csv.DictReader(fOpen)
     step = "CREATE TABLE students (name TEXT, age INTEGER, id INTEGER);"
     c.execute(step)
     for row in fInside:
          c.execute("INSERT INTO students VALUES ('{}', {}, {});".format(row['name'], row['age'], row['id']))

with open('courses.csv', newline='') as fOpen:
     fInside = csv.DictReader(fOpen)
     step = "CREATE TABLE courses (code TEXT, mark INTEGER, id INTEGER);"
     c.execute(step)
     for row in fInside:
          c.execute("INSERT INTO courses VALUES ('{}', {}, {});".format(row['code'], row['mark'], row['id']))

# 4. create table of ids and associated avgs
createTable = "CREATE TABLE stu_avg (id INTEGER, average INTEGER);"
c.execute(createTable)

# 1. look up each student's grades
def stuGrade(name):
     step =    """
               SELECT id
               FROM students
               WHERE name = '{}';
               """.format(name)
     c.execute(step)
     stuID = c.fetchone()[0]
     nxtStep = """
               SELECT code, mark
               FROM courses
               WHERE id = {};
               """.format(stuID)
     c.execute(nxtStep)
     return c.fetchall()
# test
#print(stuGrade('alison'))

# 2. compute average and input to stu_avg
getAvgs = """
          SELECT students.id, SUM(mark)/COUNT(mark)
          FROM students, courses
          WHERE students.id = courses.id
          GROUP BY students.id;
          """
c.execute(getAvgs)
lines = c.fetchall()
for idAvg in lines:
     step = "INSERT INTO stu_avg VALUES ({}, {});".format(idAvg[0], idAvg[1])
     c.execute(step)
     
# 3. display student's name, id, and avg
def stuTraits():
     step =    """
               SELECT name, stu_avg.id, average
               FROM students, stu_avg
               WHERE students.id = stu_avg.id
               """
     c.execute(step)
     return c.fetchall()
#test
#print(stuTraits())

# 5. add rows to courses table
def addCourseRow(code, mark, ID):
    c.execute("INSERT INTO courses VALUES ('{}', {}, {});".format(code, mark, ID))
addCourseRow('test', 3, 5)

db.commit()
db.close()
