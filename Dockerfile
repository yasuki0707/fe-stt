FROM node:12-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install --production
RUN npm run build

COPY .next .next

EXPOSE 3001

CMD [ "npm", "start"]
