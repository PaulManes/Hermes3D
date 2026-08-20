# Hermes3D - 3D agent visualization for Hermes.
# Multi-stage build: install prod deps -> build Next.js -> run with custom server.

FROM node:20-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts --omit=dev \
    && npm rebuild --foreground-scripts

FROM node:20-slim AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts \
    && npm rebuild --foreground-scripts
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
# Build-time gateway URL (overridden at runtime by HERMES3D_GATEWAY_URL).
ENV NEXT_PUBLIC_GATEWAY_URL=ws://127.0.0.1:18789
RUN npm run build

FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

LABEL org.opencontainers.image.source="https://github.com/PaulManes/Hermes3D"
LABEL org.opencontainers.image.description="Hardened Hermes3D — a local 3D workspace for observing AI agents."
LABEL org.opencontainers.image.licenses="MIT"

# Copy only runtime artifacts and keep them owned by the built-in unprivileged
# Node user. The application can still write its explicitly mounted Studio
# state directory, but it does not run as root inside the container.
COPY --chown=node:node --from=builder /app/.next ./.next
COPY --chown=node:node --from=builder /app/public ./public
COPY --chown=node:node --from=builder /app/server ./server
COPY --chown=node:node --from=deps /app/node_modules ./node_modules
COPY --chown=node:node --from=builder /app/package.json ./package.json
COPY --chown=node:node --from=builder /app/next.config.ts ./next.config.ts

USER node
EXPOSE 3000

CMD ["node", "server/index.js"]
