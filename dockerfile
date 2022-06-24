FROM node:16.13.1-alpine

RUN npm i -g @nestjs/cli

WORKDIR /api

COPY package*.json /api/
RUN npm ci

COPY ./ /api/

ENV PORT=9000
ENV DB_PORT=5432
ENV DB_HOST='ts-database'
ENV DB_NAME='ts-database'
ENV DB_USER='postgres'
ENV DB_PASS='postgres'

EXPOSE "9000"

CMD ["npm", "run", "dev"]