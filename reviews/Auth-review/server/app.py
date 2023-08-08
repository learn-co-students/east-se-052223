#!/usr/bin/env python3

# Set up:
# cd into server and run the following in the Terminal:
# python seed.py
# cd into client and run `npm install`
# start servers

from flask import request, make_response, abort, session, jsonify
from flask_restful import Resource
from werkzeug.exceptions import NotFound, Unauthorized

from models import Production, CastMember, User
from config import app, api, db


class Productions(Resource):
    def get(self):
        production_list = [p.to_dict() for p in Production.query.all()]
        response = make_response(
            production_list,
            200,
        )

        return response

    def post(self):
        form_json = request.get_json()
        try:
            new_production = Production(
                title=form_json['title'],
                genre=form_json['genre'],
                budget=int(form_json['budget']),
                image=form_json['image'],
                director=form_json['director'],
                description=form_json['description']
            )
        except ValueError as e:
            abort(422, e.args[0])

        db.session.add(new_production)
        db.session.commit()

        response_dict = new_production.to_dict()

        response = make_response(
            response_dict,
            201,
        )
        return response


api.add_resource(Productions, '/productions')


class ProductionByID(Resource):
    def get(self, id):
        production = Production.query.filter_by(id=id).first()
        if not production:
            abort(404, 'The Production you were looking for was not found')
        production_dict = production.to_dict()
        response = make_response(
            production_dict,
            200
        )

        return response

    def patch(self, id):
        production = Production.query.filter_by(id=id).first()
        if not production:
            abort(404, 'The Production you were trying to update for was not found')

        for attr in request.form:
            setattr(production, attr, request.form[attr])

        production.ongoing = bool(request.form['ongoing'])
        production.budget = int(request.form['budget'])

        db.session.add(production)
        db.session.commit()

        production_dict = production.to_dict()

        response = make_response(
            production_dict,
            200
        )
        return response

    def delete(self, id):
        production = Production.query.filter_by(id=id).first()
        if not production:
            abort(404, 'The Production you were trying to delete was not found')
        db.session.delete(production)
        db.session.commit()

        response = make_response('', 204)

        return response


api.add_resource(ProductionByID, '/productions/<int:id>')


class Users(Resource):
    def post(self):
        data = request.get_json()
        user = User(
            name=data['name'],
            email=data['email'],
            password_hash=data['password']
        )
        db.session.add(user)
        db.session.commit()

        session['user_id'] = user.id

        response = make_response(user.to_dict(), 201)
        return response


api.add_resource(Users, '/users')


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    try:
        user = User.query.filter_by(name=data['name']).first()
        if user.authenticate(data['password']):
            session['user_id'] = user.id
            response = make_response(user.to_dict(), 200)
            return response
    except:
        return make_response({'error': 'name or password incorrect'}, 401)


@app.route('/authorized', methods=['GET'])
def authorize():
    try:
        user = User.query.filter_by(id=session.get('user_id')).first()
        response = make_response(user.to_dict(), 200)
        return response
    except:
        return make_response({
            "error": "User not found"
        }, 404)


@app.route('/logout', methods=['DELETE'])
def logout():
    session['user_id'] = None
    return make_response('', 204)


@app.before_request
def check_logged_in():
    if (request.endpoint in ['productions', 'productionbyid', 'logout'] and request.method != 'GET') \
            or request.endpoint == 'authorize':
        if not session.get('user_id'):
            return make_response({'error': "Unauthorized"}, 401)


@app.errorhandler(NotFound)
def handle_not_found(e):
    response = make_response(
        "Not Found: Sorry the resource you are looking for does not exist",
        404
    )

    return response


if __name__ == '__main__':
    app.run(port=5000, debug=True)
