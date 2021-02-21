FROM node:12.14.1-stretch
WORKDIR /app
COPY . /app/
RUN make build && make lint
EXPOSE 80
CMD ["node", "app.js"]