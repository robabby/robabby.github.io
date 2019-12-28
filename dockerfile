FROM node:12.3.1

RUN npm i -g yarn

WORKDIR /home/node/app
ADD ./package.json .
# ADD ./yarn.lock .
RUN yarn
