FROM node:21-alpine
COPY server.js /server/
COPY index.html /server/
WORKDIR /server/
EXPOSE 1234
ENTRYPOINT ["node", "server.js"]
