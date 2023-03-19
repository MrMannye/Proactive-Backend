# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
RUN npm ci --only=production

# Copy the application files into the working directory
COPY . .

# Define the entry point for the container
CMD ["npm", "production"]
EXPOSE 3000