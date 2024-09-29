FROM node:18-alpine

WORKDIR /express

COPY package.json ./
COPY middleware ./middleware
COPY handler ./handler
COPY server.js ./

RUN npm install

EXPOSE 5656

CMD ["node", "server.js"]