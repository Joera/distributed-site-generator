FROM node:18.18-alpine

WORKDIR /usr/src/tableland-sidecar
COPY ../tableland-sidecar/ .
COPY ../environments/.env-tableland .env
RUN npm install

EXPOSE 3088
CMD [ "npm", "run", "start" ]

