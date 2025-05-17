# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build app
RUN npm run build

# Set environment
ENV NODE_ENV=production

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "dist/main"]
