#!/usr/bin/env python3

# 5. ✅ Imports
from app import app
from models import db, Production, CrewMember
from faker import Faker


# 7. ✅ Create application context - Info on application context: https://flask.palletsprojects.com/en/1.1.x/appcontext/
with app.app_context():
    fake = Faker()
    # 8.✅ Create a query to delete all existing records from Production
    Production.query.delete()
    CrewMember.query.delete()
# 9.✅ Create some seeds for production and commit them to the database.
    all_productions = []
    p1 = Production(title='Hamlet',  director='Bill Shakespeare', description='The Tragedy of Hamlet, Prince of Denmark',
                    budget=100000.00, image='https://upload.wikimedia.org/wikipedia/commons/6/6a/Edwin_Booth_Hamlet_1870.jpg', ongoing=True)
    all_productions.append(p1)
    p2 = Production(title='Cats', director='Andrew Lloyd Webber', description=' Jellicles cats sing and dance',
                    budget=200000.00, image='https://upload.wikimedia.org/wikipedia/en/3/3e/CatsMusicalLogo.jpg', ongoing=True)
    all_productions.append(p2)
    p3 = Production(title='Carmen', director='Georges Bizet', description='Set in southern Spain this is the story of the downfall of Don José, a naïve soldier who is seduced by the wiles of the fiery and beautiful Carmen.', budget=200000.00,
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Prudent-Louis_Leray_-_Poster_for_the_premi%C3%A8re_of_Georges_Bizet%27s_Carmen.jpg/300px-Prudent-Louis_Leray_-_Poster_for_the_premi%C3%A8re_of_Georges_Bizet%27s_Carmen.jpg', ongoing=False)
    all_productions.append(p3)
    p4 = Production(title='Hamilton', director='Lin-Manuel Miranda', description='An American Musical is a sung-and-rapped-through musical by Lin-Manuel Miranda. It tells the story of American Founding Father Alexander Hamilton.',
                    budget=400000.00, image='https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Hamilton-poster.jpg/220px-Hamilton-poster.jpg', ongoing=False)
    all_productions.append(p4)

    db.session.add_all(all_productions)
    db.session.commit()
# 10.✅ Run in terminal:
# `python seed.py`


# 11. ✅ Create some seeds for crew_members and commit them to the database.

    hamlet_roles = ['Hamlet', 'Ophelia', 'Polonius',
                    'Laertes', 'Horatio', 'Gertrude', 'Ghost']
    hamlet_cast_members = [CrewMember(
        name=fake.name(), role=role, production_id=p1.id) for role in hamlet_roles]
    db.session.add_all(hamlet_cast_members)
    db.session.commit()

    cats_roles = ['Mr. Mistoffelees',
                  'Bombalurina', 'Rumpletezer', 'Grizabella']
    cats_cast_members = [CrewMember(
        name=fake.name(), role=role, production_id=p2.id) for role in cats_roles]
    db.session.add_all(cats_cast_members)
    db.session.commit()

    carmen_roles = ['Carmen', 'Escamillo', 'Jose', 'Mercedes', 'Dancaire']
    carmen_cast_members = [CrewMember(
        name=fake.name(), role=role, production_id=p3.id) for role in carmen_roles]
    db.session.add_all(carmen_cast_members)
    db.session.commit()

    hamilton_roles = ['Alexander Hamilton', 'King George III', 'Marquis de Lafayett',
                      'Angelica Schuyler Church', 'Peggy Schuyler', 'Thomas Jefferson']
    hamilton_cast_members = [CrewMember(
        name=fake.name(), role=role, production_id=p4.id) for role in hamilton_roles]
    db.session.add_all(hamilton_cast_members)
    db.session.commit()
