from flask import Flask
from sqlalchemy import MetaData
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restful import Api

from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///funstuff.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
md = MetaData(naming_convention={
    'fk': 'fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s'
})
db = SQLAlchemy(metadata=md)
Migrate(app, db)
db.init_app(app)
api = Api(app)
bcrypt = Bcrypt(app)

# Set up:
# generate a secrete key `python -c 'import os; print(os.urandom(16))'`
app.secret_key = b'\xae!\xc8\xf7\xdda\xb6)\t\x00N\x9f\xf9\\!>'
