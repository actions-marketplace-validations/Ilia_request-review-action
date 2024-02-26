FROM mhart/alpine-node:12

ADD package*.json /
RUN npm ci --production
ADD request-review.js /
RUN chmod +x /request-review.js

ENTRYPOINT ["node", "/request-review.js"]