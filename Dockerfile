# Dockerfile
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Create a non-root user with matching UID/GID
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001 -G nodejs

# Create .astro directory and set permissions
RUN mkdir -p .astro && chown -R nextjs:nodejs /app

# Expose port
EXPOSE 4321

# Start the application
CMD ["npm", "run", "dev"]