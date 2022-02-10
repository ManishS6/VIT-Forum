FROM node:16

WORKDIR /app
# get code from github
COPY ./package*.json ./ 

RUN npm install --only=production

COPY ./ ./

RUN npm ci --only=production

EXPOSE 5000

CMD [ "npm", "start" ]