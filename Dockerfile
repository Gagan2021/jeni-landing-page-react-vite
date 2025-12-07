FROM node:latest

WORKDIR /app

# Copy only package files first for caching
COPY package*.json ./

# Install deps
RUN npm install

# Copy all project files
COPY . .

# Vite dev server default port
EXPOSE 5173

# Allow Vite to run on all hosts
ENV HOST=0.0.0.0

CMD ["npm", "run", "dev", "--", "--host"]
