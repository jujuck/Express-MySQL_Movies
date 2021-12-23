## Express MySQL Api for movies

git clone
npm i && npm start

## Goal
The goal of the API is to fetch data from a database on table movies and author (CRUD)

## Steps Part 1 (Simple route)
- 1/ Create a database videotifly and add a table movies with id (int auto incr primary key not null), title (varchar 250,not null), synopsis (longtext), year (int), genre (varchar 100), duration (int)
- 2/ Connect the data base to the express template (use a db-config, mysql2, dotenv ...) and get the connection in the app.js
- 3/ Add data in the movies tables with the provides files (./sql/step3.sql)
- 4/ Add a get route for all the movies
- 5/ Add a get route for one movies
- 6/ Add a post route to add a movies (body params) and get the ID on the send data if successful ({success: 'msg', data: ...Id})
- 7/ Add an update route with body params
- 8/ Add a delete route for the movie
- 9/ Go to the repo (https://github.com/jujuck/React_Movies/blob/main/README.md) to prepare the front End part
Option in order to connect the Front End part
  If you want to have request from 2 differents origin (URL or PORT)
  install cors, import it in the main app and add 'app.use(cors())' above app.use(express.json()
- .....

## Steps Part 2 (Structure, filter and validation)
- 10/ Restructuring => replace function with route/Controller/Model as seen in quest
- 11/ Adding fields validation with joi for the post and put routes
- 12/ Adding filter on the get movies by genre, duration, year
- .... (Front Part 2)

## Steps Part 3 (Middleware, user && auth)
Following the workshop (https://docs.google.com/presentation/d/1_uuWY9bWG7y6OGIFOJAePk4fjJeqb5w2pkAzrtpGzzk/edit#slide=id.p)
- 13/ Create a user table with firstname, lastname, email and hashedpassword, and uuid
- 14/ Create the route to create the user (POST), add the method to hash the password (Bcrypt) (https://medium.com/@mridu.sh92/a-quick-guide-for-authentication-using-bcrypt-on-express-nodejs-1d8791bb418f) and the module to calculate the iuud. On this route, you should add a middleware to check first if the email already exist.
- 15/ Add an auth route to get credentail from sign in. This route get the hashedpassword and uuid from the email and then verify it. (Try to use middleware to clean your code)
- 16/ Add the method to calculate a JsonWebToken from the email and uuid and return it as cookie with secure parameters and a sjon for the user (firstname, lastname, email)

<img scr="./images/auth_secure_cookies.png" >


