#!/usr/bin/env python3
from flask import Flask, make_response, jsonify, request
from flask_migrate import Migrate
# 1. ✅ import Api and Resource from flask_restful
from flask_restful import Api, Resource
from models import db, Production, CrewMember

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
migrate = Migrate(app, db)
db.init_app(app)
# 2. ✅ initialize RESTful API with Api class
api = Api(app)


@app.route('/')
def index():
    return '<h1>Hello World!</h1>'


class Productions(Resource):
    def get(self):
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

    def post(self):
        data = request.get_json()
        production = Production(
            title=data['title'],
            budget=data['budget'],
            image=data['image'],
            director=data['director'],
            description=data['description'],
            ongoing=data['ongoing']
        )
        db.session.add(production)
        db.session.commit()

        response_dict = {
            "title": production.title,
            "id": production.id
        }
        response = make_response(jsonify(response_dict), 201)
        return response


api.add_resource(Productions, "/productions")
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


class CrewMembers(Resource):
    def get(self):
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


api.add_resource(CrewMembers, '/crew_members')

# 6. ✅ convert to flask_restful


class CrewMembersById(Resource):
    def get(self, id):
        crew_member = CrewMember.query.filter(CrewMember.id == id).first()
        member_dict = {
            "id": crew_member.id,
            "name": crew_member.name,
            "production_title": crew_member.production.title
        }
        response = make_response(member_dict, 200)
        return response

    def patch(self, id):
        crew_member = CrewMember.query.filter(CrewMember.id == id).first()
        data = request.get_json()

        for attr in data:
            setattr(crew_member, attr, data[attr])

        # db.session.add(crew_member)
        db.session.commit()

        response_dict = {
            "name": crew_member.name
        }

        response = make_response(response_dict, 200)
        return response

    def delete(self, id):
        crew_member = CrewMember.query.filter(
            CrewMember.id == id).first()
        db.session.delete(crew_member)
        db.session.commit()
        response_dict = {
            "message": f"Successfully deleted crew member with id {id}"
        }

        response = make_response(response_dict, 200)
        return response


api.add_resource(CrewMembersById, '/crew_members/<int:id>')


# 9. ✅ Delete an existing crew member

# Note: If you'd like to run the application as a script instead of using `flask run`, uncomment the line below
# and run `python app.py`

# if __name__ == '__main__':
#     app.run(port=5000, debug=True)
