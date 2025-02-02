# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --only=production

# Copy source files
COPY . .

# Expose port
EXPOSE 3001

# Start the application
CMD ["npm", "run", "start:prod"]