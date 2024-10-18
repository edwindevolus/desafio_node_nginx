
FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm un mysql && npm i mysql2

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]