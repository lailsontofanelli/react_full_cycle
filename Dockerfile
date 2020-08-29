FROM node:alpine as build
WORKDIR /app
COPY . /app
ENV PATH /app/node_modules/.bin:$PATH

RUN yarn --network-timeout=30000
RUN yarn build

EXPOSE 3000

CMD ["npm", "run", "start"]