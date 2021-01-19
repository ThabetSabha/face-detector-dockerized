# FaceDetector

A small full stack web app that uses an api to detect faces in images submitted.
    
The front-end was built using React, while the backend was built using Express.
it uses Bcrypt to encrypt passwords, Knex.js for querying the PostgreSQL database, and Redis & JWT to handle user sessions. 

PS. this was one of my first projects, so the code quality isn't that great.
     
         
Live Demo : https://demo-face-detector.herokuapp.com/
    
       
To use tihs project:
1- you need to provide your own .env file containing : 
    a- CLARIFAI_KEY (need to create a clarifai account, used to handle face-detection requests to the clarifai api)
    b- JWT_SECRET = (to sign the JWT)
2- have docker installed
3- to run in production cd into the project and run "docker-compose up --build" , this will create the docker containers (server, postgres, redis), and then run the app in production mode (to run in development check the docker-compose as well as the Dockerfile provided).
