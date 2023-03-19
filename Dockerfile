# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

# Install the application dependencies
RUN npm install --production

# Copy the application files into the working directory
COPY . .

EXPOSE 80
# Define the entry point for the container
CMD ["npm", "production"]