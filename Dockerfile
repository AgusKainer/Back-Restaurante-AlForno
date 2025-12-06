FROM node:18
WORKDIR /home/app
COPY . .
RUN npm install
EXPOSE 1000
CMD ["node", "--watch-path=src", "src/index.js"]