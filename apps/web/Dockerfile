FROM node:current-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN npm install --global corepack@latest
RUN corepack use pnpm@latest-10
RUN pnpm install -g turbo


FROM base AS builder
WORKDIR /app

COPY . .
RUN turbo prune web --docker


FROM base AS installer
WORKDIR /app

COPY --from=builder /app/out/json/ ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY --from=builder /app/out/full/ ./
COPY --from=builder /app/.dmno ./.dmno
COPY --from=builder /app/apps/web/.dmno ./apps/web/.dmno
COPY --from=builder /app/apps/api/.dmno ./apps/api/.dmno
COPY --from=builder /app/packages/db/.dmno ./packages/db/.dmno

RUN pnpm turbo build



# FROM nginx:alpine AS runtime
# WORKDIR /usr/share/nginx/html
# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 astro
# USER astro

# COPY --from=installer --chown=astro:nodejs /app/nginx/nginx.conf /usr/share/nginx/html
# COPY --from=installer --chown=astro:nodejs /app ./
# COPY --from=builder --chown=astro:nodejs /app/.dmno ./.dmno
# COPY --from=builder --chown=astro:nodejs /app/apps/api/.dmno ./apps/api/.dmno
# COPY --from=builder /app/dist /usr/share/nginx/html


EXPOSE 3000
