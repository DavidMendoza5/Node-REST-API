FROM node:20.16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json .

RUN npm install

# Bundle app source
COPY . .

# Initialization command
CMD ["node", "index.js"]