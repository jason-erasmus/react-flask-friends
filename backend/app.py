from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

# create database
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///friends.db"
# read up on track modifications
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

import routes

# Creates the database connection
with app.app_context():
    db.create_all()


if __name__ == "__main__":
    app.run(debug=True)
