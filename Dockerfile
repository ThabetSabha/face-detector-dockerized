FROM node:14.15.4

WORKDIR /usr/src/face-detector

COPY ./ ./

RUN npm install

# For production comment out the command below and uncomment the "npm run heroku-postbuild" command
RUN npm run install:client

# Uncomment For Production, comment it out for devleopment
# RUN npm run heroku-postbuild


CMD ["/bin/bash"]