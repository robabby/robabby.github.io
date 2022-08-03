FROM node:16.16-alpine

RUN npm i -g yarn

WORKDIR /home/node/app
ADD ./package.json .
# ADD ./yarn.lock .
RUN yarn
