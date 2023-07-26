#!/usr/bin/env python3
from flask import Flask, make_response, jsonify
from flask_migrate import Migrate
# 1. ✅ import Api and Resource from flask_restful
from models import db, Production, CrewMember

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
migrate = Migrate(app, db)
db.init_app(app)
# 2. ✅ initialize RESTful API with Api class


@app.route('/')
def index():
    return '<h1>Hello World!</h1>'

# 3. ✅ convert routes to use flask_restful


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

# 4. ✅ Is this route RESTful?


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

# 5. ✅ convert to flask_restful


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

# 6. ✅ convert to flask_restful


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

# 7. ✅ Create a new production

# 8. ✅ Update an existing crew member

# 9. ✅ Delete an existing crew member

# Note: If you'd like to run the application as a script instead of using `flask run`, uncomment the line below
# and run `python app.py`

# if __name__ == '__main__':
#     app.run(port=5000, debug=True)
