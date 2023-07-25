# SQLAlchemy import from flask_sqlalchemy
from flask_sqlalchemy import SQLAlchemy
# What SQLAlchemy() is replacing from SQLAlchemy in phase 3 (imports of Base/declarative_base, Column, types(Integer, String, etc.) )
db = SQLAlchemy()


class Production(db.Model):
    __tablename__ = 'productions'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    budget = db.Column(db.Float)
    image = db.Column(db.String)
    director = db.Column(db.String)
    description = db.Column(db.String)
    ongoing = db.Column(db.Boolean)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    crew_members = db.relationship('CrewMember', back_populates='production')

    def __repr__(self):
        return f'<Production title={self.title}>'

# relationships (back_populates vs back_ref)


class CrewMember(db.Model):
    __tablename__ = "crew_members"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    role = db.Column(db.String)
    production_id = db.Column(db.Integer, db.ForeignKey('productions.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    production = db.relationship('Production', back_populates='crew_members')

# 4. ✅ navigate to seed.py
