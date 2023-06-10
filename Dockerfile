FROM node:14.19.1-alpine AS build

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

# create & set working directory
WORKDIR /workdir

# copy source files
COPY . /workdir

# install dependencies
COPY package.json yarn.lock ./
RUN yarn

# build app
RUN yarn build

# start server
EXPOSE 3000
CMD yarn start
