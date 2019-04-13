FROM node:8.15.1-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN npm run seed

# RUN yarn global add nodemon

EXPOSE 4000

CMD [ "npm", "run", "start" ]