FROM node:alpine

RUN mkdir /api
WORKDIR /api
COPY package.json /api/
RUN npm i -g typescript
RUN npm i

COPY . /api/

RUN mkdir -pv /api/data

RUN tsc

EXPOSE 3000

CMD ["npm", "run", "serve:api"]