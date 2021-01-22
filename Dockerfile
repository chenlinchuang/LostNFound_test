FROM node:12-alpine
WORKDIR	 /LostNFound
COPY . .
RUN yarn && yarn build
CMD ["yarn", "start"]
