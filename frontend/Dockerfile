# Use Node.js as the builder stage
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend code
COPY . .

# Build the Vite app
RUN npm run build

# Verify that the build folder exists
RUN ls -la /app/dist

# Use Nginx to serve the frontend
FROM nginx:stable-alpine

# Copy the build output to Nginx's web directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
