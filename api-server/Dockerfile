FROM node:lts-slim
WORKDIR /api-server
COPY package.json .
COPY server.ts .
COPY tsconfig.json .
RUN npm i
CMD ["npm", "start"]
