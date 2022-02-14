FROM node:12-alpine as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build

FROM node:12-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production --cache /tmp/empty-cache && rm -rf /tmp/empty-cache
COPY .next .next
EXPOSE 3001

CMD [ "npm", "start"]
