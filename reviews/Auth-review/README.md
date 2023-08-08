## Signup

1. configure app in config.py (bcrypt(for password encryption) and secret_key(for session))
2. setup User model
3. add `_password_hash` column as string
4. property getter and setter for password hash (also import bcrypt)
5. create migration
6. run migration
7. define signup route (POST '/users')
8. create User with data from body of request
9. add user to db session and commit to db
10. add the new user's id to session
11. return new user in response
12. define route on frontend to display signup form
13. on sumbit of form make request to backend (POST '/users')
14. if good set state of user and navigate to new route
15. if bad display errors

## Login

1. define login route in app.py
2. define authenticate method in User model to check password sent in request matches password in db (using bcrypt's check_password_hash method)
3. in login view, find user with name sent in request
4. if user is found, authenticate their password
5. if user password was authenticated successfully, add user_id in session and return user dict in response
6. otherwise unauthorized response with error message
7. add login form and request in frontend with name and password in body of request
8. if good set state of user and navigate to new route
9. if bad display errors

## limiting routes in backend

1. figure out which routes a user needs to be logged in for
2. add a before_request decorator
3. in method add condition checking if the endpoint is one of the endpoints a user has to be logged in for
4. if it is a route that a user needs to be logged in for, make sure there is a `user_id` in the session
5. if there is not, return unauthorized response
