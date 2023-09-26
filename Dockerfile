FROM node:18-alpine AS builder

# Specify the working directory
WORKDIR /app

# Copy package.json and package-lock.json for utilising Docker cache
COPY . /app

# install all the project npm dependencies and 
# build the svelte project to generate the artifacts in build directory
RUN npm install && npm run build

# we are using multi stage build process
FROM node:18-alpine3.17

# set work dir as app
WORKDIR /app

# copy the build directory to the /app directory of second stage 
COPY --from=build /app/build /app/package.json ./

EXPOSE 5173

# start the app with dumb init to spawn the Node.js runtime process
# with signal support
CMD ["dumb-init","node","index.js"]