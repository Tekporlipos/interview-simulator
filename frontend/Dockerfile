# Use Node.js 14 as the base image
FROM node:18 AS builder

# Add author label
LABEL authors="tekporlipos"

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Use a lightweight Node.js image as the base image for the production environment
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the built application from the previous stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.js ./
# Expose the port Next.js is running on (default is 3000)
EXPOSE 3000

# Command to run the Next.js application
CMD ["npm", "start"]
