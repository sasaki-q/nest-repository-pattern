FROM node:16.13.1-alpine

RUN npm i -g @nestjs/cli

WORKDIR /api

COPY package*.json /api/
RUN npm ci

ENV PORT=9001
ENV DB_HOST='ts-database'
ENV DB_NAME='ts-database'
ENV DB_USER='postgres'
ENV DB_PASS='postgres'

EXPOSE "9000"

CMD ["npm", "run", "dev"]