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
