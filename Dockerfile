FROM keymetrics/pm2:latest-alpine
COPY . /app
WORKDIR /app
# https://github.com/keymetrics/docker-pm2/issues/45#issuecomment-452725954
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    git \
    bash

RUN npm config set registry https://registry.npm.taobao.org/ && \  
    npm i 
EXPOSE 3000
CMD  pm2-runtime start ecosystem.config.js