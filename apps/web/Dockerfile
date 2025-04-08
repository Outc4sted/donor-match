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
RUN turbo prune web --docker


FROM base AS installer
WORKDIR /app

# ARG PUBLIC_CLERK_PUBLISHABLE_KEY
# ENV PUBLIC_CLERK_PUBLISHABLE_KEY=$PUBLIC_CLERK_PUBLISHABLE_KEY

# ARG CLERK_SECRET_KEY
# ENV CLERK_SECRET_KEY=$CLERK_SECRET_KEY

COPY --from=builder /app/out/json/ ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY --from=builder /app/out/full/ ./
COPY --from=builder /app/.dmno ./.dmno
COPY --from=builder /app/apps/api/.dmno ./apps/api/.dmno
RUN pnpm turbo build


FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 astro
USER astro

COPY --from=installer --chown=astro:nodejs /app ./

EXPOSE 3000
CMD ["pnpm", "exec", "dmno", "run", "-s", "web", "--", "node", "apps/web/dist/server/entry.mjs"]

# FROM nginx:alpine AS runtime
# # WORKDIR /usr/share/nginx/html
# # RUN addgroup --system --gid 1001 nodejs
# # RUN adduser --system --uid 1001 astro
# # USER astro

# # RUN mkdir -p /etc/nginx/templates
# COPY --from=installer /app/apps/web/nginx/default.conf.template /etc/nginx/templates/
# COPY --from=installer --chown=astro:nodejs /app/apps/web/dist /usr/share/nginx/html


# # COPY --from=installer --chown=astro:nodejs /app/nginx/nginx.conf /usr/share/nginx/html
# # COPY --from=installer --chown=astro:nodejs /app ./
# # COPY --from=builder --chown=astro:nodejs /app/.dmno ./.dmno
# # COPY --from=builder --chown=astro:nodejs /app/apps/api/.dmno ./apps/api/.dmno
# # COPY --from=installer /app/dist /usr/share/nginx/html


# EXPOSE 80
