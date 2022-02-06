FROM node:12-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install --production
RUN npm run build

EXPOSE 3001

CMD [ "npm", "start"]
