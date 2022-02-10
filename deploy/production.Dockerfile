FROM node:15-alpine AS builder
# serving static web-page using nginx server
WORKDIR /app

COPY ./package*.json ./ 

RUN npm install

COPY ./ .

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=builder /app/build .

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]