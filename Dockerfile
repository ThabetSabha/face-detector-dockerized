FROM node:14.15.4

WORKDIR /usr/src/face-detector

COPY ./ ./

RUN npm install

# for development uncomment the command below and comment out the "npm run heroku-postbuild" command
#RUN npm run install:client

#For Production, comment it for devleopment
RUN npm run heroku-postbuild


CMD ["/bin/bash"]