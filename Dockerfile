#stage 1
FROM node:latest as node
ENV PORT 3000
WORKDIR /app
COPY . . 
RUN npm install -g npm
RUN npm install & npm cache clean --force
RUN npm run build --env=prod
CMD npm start
EXPOSE 3000

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/hello-andular-tdd /usr/share/nginx/html