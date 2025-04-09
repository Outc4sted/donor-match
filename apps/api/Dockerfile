FROM node:current-alpine AS base
ARG APP_ENV
ENV APP_ENV=$APP_ENV
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

ARG PUBLIC_CLERK_PUBLISHABLE_KEY
ENV PUBLIC_CLERK_PUBLISHABLE_KEY=$PUBLIC_CLERK_PUBLISHABLE_KEY

ARG CLERK_SECRET_KEY
ENV CLERK_SECRET_KEY=$CLERK_SECRET_KEY

COPY --from=builder /app/out/json/ ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY --from=builder /app/out/full/ ./
COPY --from=builder /app/.dmno ./.dmno
COPY --from=builder /app/apps/web/.dmno ./apps/web/.dmno

RUN pnpm turbo build


FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 fastify
USER fastify

COPY --from=installer --chown=fastify:nodejs /app ./

EXPOSE 3001
CMD ["pnpm", "exec", "dmno", "run", "-s", "api", "--", "node", "apps/api/dist/server.js"]
