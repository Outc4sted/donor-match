FROM oven/bun:latest AS base
WORKDIR /app
COPY ./package.json ./bun.lock ./
COPY ./packages/api/package.json ./packages/api/
COPY ./packages/ts-rest/package.json ./packages/ts-rest/
COPY ./packages/db/package.json ./packages/db/

FROM base AS build-deps
WORKDIR /app
RUN bun install --ignore-scripts
# RUN bun install --frozen-lockfile

FROM base AS prod-deps
WORKDIR /app
RUN bun install --ignore-scripts
# RUN bun install --production

FROM build-deps AS build
WORKDIR /app
COPY ./packages/api ./packages/api/
COPY ./packages/ts-rest ./packages/ts-rest/
COPY ./packages/db ./packages/db/

WORKDIR /app/packages/db
RUN bun run build
WORKDIR /app/packages/ts-rest
RUN bun run build
WORKDIR /app/packages/api
RUN bun run build

FROM oven/bun:latest AS runtime
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/packages/api/dist ./packages/api
COPY --from=build /app/packages/ts-rest/dist ./packages/ts-rest
COPY --from=build /app/packages/db/dist ./packages/db

EXPOSE 3001

CMD [ "bun", "packages/api/server.js" ]
