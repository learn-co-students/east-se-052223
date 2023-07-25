#!/usr/bin/env python3
# 1. ✅ Navigate to `models.py`

# 2. ✅ Set Up Imports
# `Flask` from `flask`
# `Migrate` from `flask_migrate`
# db and `Production` from `models`


# 3. ✅ Initialize the App
# Add `app = Flask(__name__)`
# Configure the database by adding`app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'`
# and `app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False`
# Set the migrations with `migrate = Migrate(app, db)`
# Finally, initialize the application with `db.init_app(app)`

# 4. ✅ Migrate
# `cd` into the `server` folder

# Run in Terminal
# export FLASK_APP=app.py
# export FLASK_RUN_PORT=5555
# flask db init
# flask db revision --autogenerate -m 'Create tables productions'
# flask db upgrade

# Review the database to verify your table has migrated correctly

# 5. ✅ Navigate to `seed.py`

# 6. ✅ Routes
#  @app.route('/')
#  def index():
#    return '<h1>Hello World!</h1>'

# create route for all productions

# 7. ✅ Run the server with `flask run` and verify your route in the browser at `http://localhost:5555/`

# 8. ✅ Create a dynamic route


# 9.✅ Update the route to find a `production` by its `title` and send it to our browser

# Before continuing, import `jsonify` and `make_response` from Flask at the top of the file.
# `make_response` will allow us to make a response object with the response body and status code
# `jsonify` will convert our query into JSON


# Note: If you'd like to run the application as a script instead of using `flask run`, uncomment the line below
# and run `python app.py`

# if __name__ == '__main__':
#     app.run(port=5000, debug=True)
