FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app /app

RUN mkdir -p /app/results

VOLUME ["/app/results"]

ENTRYPOINT ["node", "index.js"]