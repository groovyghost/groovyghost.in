FROM node:18-bullseye as BUILD_IMAGE
WORKDIR /app
COPY package.json package-lock.json ./
# install dependencies
RUN npm install
COPY . .
# build
RUN npm run build
# remove dev dependencies
RUN npm prune --production
WORKDIR /app
FROM node:18-alpine
# copy from build image
COPY --from=BUILD_IMAGE /app/package.json ./package.json
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public
EXPOSE 3000
CMD ["npm", "run", "serve"]
#docker run -d -e WEATHERKEY='78252f51e659ffff29feb3a41e01aac0' -p 3000:3000 nextjs-docker
