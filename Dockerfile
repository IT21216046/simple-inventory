# Step 1: Use official Node.js image
FROM node:18

# Step 2: Set working directory inside container
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of your app
COPY . .

# Step 5: Expose the port (make sure it matches .env)
EXPOSE 3000

# Step 6: Define the command to run your app
CMD ["node", "server.js"]
