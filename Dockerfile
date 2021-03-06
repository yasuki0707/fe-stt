FROM node:12-alpine as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:12-alpine
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/package*.json /usr/src/app/
RUN npm install --production
# --cache /tmp/empty-cache && rm -rf /tmp/empty-cache
COPY --from=build /usr/src/app/.next /usr/src/app/.next
EXPOSE 3001

CMD [ "npm", "start"]
