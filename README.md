# FaceDetector

A small full stack web app that uses an api to detect faces in images submitted.
    
The front-end was built using React, while the backend was built using ExpressJS.    
It uses Bcrypt to encrypt users’ passwords, Knex.js to query the PostgreSQL database that is used to store user info,    
Redis to handle user sessions, and two AWS Lambda functions to upload and delete user Avatars from an AWS S3 bucket.     
The app’s services (Backend, Redis, & Postgres) were also containerized using Docker, along with Docker-Compose to connect them.      
    
PS. this was one of my first projects, so the code quality isn't that great.
     
         
Live Demo : https://demo-face-detector.herokuapp.com/
    
       
To use this project you need to:    
1- provide your own .env file containing :     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a- CLARIFAI_KEY (you need to create a clarifai account, used to handle face-detection requests to the clarifai api)      
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b- JWT_SECRET = (to sign the JWT)     
2- have docker installed     
3- to run in development cd into the project and run "docker-compose up --build",
this will create the docker containers (app, postgres, redis), and then run the app in dev mode (Server on port 5000, Client on port 3000).     
*to run in production check the docker-compose as well as the Dockerfile provided in the main folder.     
     
*Lambda functions used have a strict CORS policy, so you need to create your own to use in development (functions are provided in /src/Lambdas)
