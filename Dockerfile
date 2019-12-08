FROM node:12.13.1-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.3.0 -g --silent

# start app
CMD ["npm", "start"]
# docker build -t sample:dev .
# docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm sample:dev
