FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-slim
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src/routes ./src/routes
COPY --from=builder /app/src/config ./src/config

COPY .env* ./
EXPOSE 3000


RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*


HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1
  
CMD ["node", "dist/app.js"]