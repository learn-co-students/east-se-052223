#!/usr/bin/env python3
# 1. ✅ Navigate to `models.py`

# 2. ✅ Set Up Imports
from flask import Flask, make_response, jsonify
from flask_migrate import Migrate

from models import db, Production, CrewMember

# 3. ✅ Initialize the App
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
migrate = Migrate(app, db)
db.init_app(app)


@app.route('/')
def index():
    return '<h1>Hello World!</h1>'


@app.route('/productions')
def productions():
    productions = Production.query.all()
    all_productions_list = []
    for production in productions:
        production_dict = {
            "title": production.title,
            "image": production.image,
            "description": production.description,
            "created_at": production.created_at
        }
        all_productions_list.append(production_dict)

    response = make_response(
        jsonify(all_productions_list),
        200
    )

    return response


@app.route('/productions/<string:title>')
def one_production(title):
    production = Production.query.filter(Production.title == title).first()
    prod_dict = {
        "id": production.id,
        "title": production.title,
        "image": production.image
    }
    response = make_response(
        prod_dict,
        200
    )
    return response


@app.route('/crew_members')
def crew_members():
    members = CrewMember.query.all()
    members_list = []
    for member in members:
        member_dict = {
            "id": member.id,
            "name": member.name
        }
        members_list.append(member_dict)

    response = make_response(
        jsonify(members_list),
        200
    )

    return response

# 12.✅ dynamic route for crew member by id


@app.route('/crew_members/<int:id>')
def crew_member(id):
    crew_member = CrewMember.query.filter(CrewMember.id == id).first()
    member_dict = {
        "id": crew_member.id,
        "name": crew_member.name,
        "production_title": crew_member.production.title
    }
    response = make_response(member_dict, 200)
    return response

# Note: If you'd like to run the application as a script instead of using `flask run`, uncomment the line below
# and run `python app.py`

# if __name__ == '__main__':
#     app.run(port=5000, debug=True)
