FROM node:18-alpine

# Create app directory
WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]