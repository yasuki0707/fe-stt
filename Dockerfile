FROM registry.access.redhat.com/ubi8/nodejs-14-minimal:1 AS base

WORKDIR /opt/app-root/src

FROM base as build
COPY . /opt/app-root/src/
RUN npm set progress=false && \
    npm config set depth 0 && \
    npm ci --only-production --ignore-scripts
RUN npm run build


FROM base as release
COPY --from=build /opt/app-root/src/.next /opt/app-root/src/.next
COPY package*.json /opt/app-root/src/
COPY public /opt/app-root/src/public
RUN npm upgrade
RUN npm install --only=prod
ENV PORT 3001
EXPOSE 3001
CMD ["npm", "start"]
