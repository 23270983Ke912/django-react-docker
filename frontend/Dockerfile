FROM node:16-alpine

WORKDIR /app/frontend/
RUN apk add --no-cache bash

COPY package*.json /app/frontend/
RUN npm install

COPY . /app/frontend/

CMD ["npm", "start"]
