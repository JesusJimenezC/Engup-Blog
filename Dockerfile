FROM oven/bun:1.2.17-alpine AS deps
WORKDIR /app
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

FROM oven/bun:1.2.17-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV DIRECTUS_URL=${DIRECTUS_URL}
ENV DIRECTUS_PUBLIC_URL=${DIRECTUS_PUBLIC_URL}
ENV APP_PORT=${APP_PORT}
ENV APP_HOST=${APP_HOST}
RUN bun run build
RUN rm -rf node_modules

FROM oven/bun:1.2.17-alpine AS prod-deps
WORKDIR /app
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile --production

FROM oven/bun:1.2.17-alpine AS prod
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
EXPOSE ${APP_PORT}
CMD ["bun", "dist/server/entry.mjs"]
