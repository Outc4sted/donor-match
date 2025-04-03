FROM node:current-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN npm install --global corepack@latest
RUN corepack use pnpm@latest-10
RUN pnpm install -g turbo

FROM base AS builder
WORKDIR /app

COPY . .
RUN turbo prune api --docker


FROM base AS installer
WORKDIR /app

COPY --from=builder /app/out/json/ ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY --from=builder /app/out/full/ ./
RUN pnpm turbo build


FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 fastify
USER fastify

COPY --from=installer --chown=fastify:nodejs /app ./
COPY --from=builder --chown=fastify:nodejs /app/.dmno ./.dmno
COPY --from=builder --chown=fastify:nodejs /app/apps/web/.dmno ./apps/web/.dmno


EXPOSE 3001
CMD ["pnpm", "exec", "dmno", "run", "-s", "api", "--", "node", "apps/api/dist/server.js"]
