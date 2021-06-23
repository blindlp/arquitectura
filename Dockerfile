FROM node:14.7.0-alpine3.10 

ADD package*.json /tmp/

RUN cd /tmp && npm install

RUN mkdir /app && cp -a tmp/node_modules /app 

WORKDIR /app

ADD . .

RUN echo "Directorio" 
RUN pwd
run -ls

RUN npm run build

WORKDIR /app

RUN ls

CMD ["npm","run","serve"]


