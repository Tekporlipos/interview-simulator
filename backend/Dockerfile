# Stage 1: Build the NestJS application
FROM node:20 AS builder

WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the NestJS application
RUN npm run build

# Stage 2: Create a smaller image for production
FROM node:20-alpine

WORKDIR /app

# Copy only the built files from the previous stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Expose the port your app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/main"]
