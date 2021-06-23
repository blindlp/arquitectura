FROM node:14.7.0-alpine3.10 as stageBuild

ADD package*.json /tmp/

RUN cd /tmp && npm install

RUN mkdir /app && cp -a tmp/node_modules /app 

WORKDIR /app

ADD . .

RUN npm run build

FROM node:14.7.0-alpine3.10

WORKDIR /app

COPY --from=stageBuild /app/node_modules app/node_modules
COPY --from=stageBuild /app/dist app/dist
COPY package.json .
COPY env.yaml .

CMD ["npm","run","serve"]


