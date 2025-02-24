# =========== STAGE 1: Build the React App ===========
FROM node:18-alpine AS build

# 1) Set working directory
WORKDIR /usr/src/app

# 2) Copy package.json and package-lock.json (if any)
COPY package*.json ./

# 3) Install dependencies
RUN npm install

# 4) Copy the rest of the app
COPY . .

# 5) Build the production-ready files
RUN npm run build

# =========== STAGE 2: Serve with Nginx ===========
FROM nginx:alpine

# 6) Copy build files from Stage 1
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# 7) Expose port 80
EXPOSE 80

# 8) Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
