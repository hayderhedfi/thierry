FROM node:lts as dependencies
WORKDIR /unblocked/nefty7-app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /unblocked/nefty7-app
COPY . .
COPY --from=dependencies /unblocked/nefty7-app/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /unblocked/nefty7-app
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /unblocked/nefty7-app/public ./public
COPY --from=builder /unblocked/nefty7-app/.next ./.next
COPY --from=builder /unblocked/nefty7-app/node_modules ./node_modules
COPY --from=builder /unblocked/nefty7-app/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]