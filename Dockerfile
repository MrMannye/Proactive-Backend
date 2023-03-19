# Use the official Node.js image as the base image
FROM node:18

ENV NODE_ENV=production

# Set the working directory in the container
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

# Copy the application files into the working directory
COPY . .

# Install the application dependencies
RUN npm install
RUN npm run tsc

EXPOSE 8080

# Define the entry point for the container
CMD ["npm", "production"]