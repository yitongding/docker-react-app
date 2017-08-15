# FROM mhart/alpine-node:5.6.0
FROM mhart/alpine-node:latest
EXPOSE 3000

WORKDIR /app
ADD . /app
RUN npm install

CMD ["npm", "server.js"]
