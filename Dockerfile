FROM node:19-bullseye-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 5432

CMD ["npm", "start"]
