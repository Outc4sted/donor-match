FROM oven/bun:latest as base
WORKDIR /app
COPY package.json bun.lockb ./

FROM base AS build-deps
RUN bun install --frozen-lockfile

FROM build-deps AS build
COPY . .
RUN bun run build

FROM base AS runtime
COPY --from=build-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./

EXPOSE 3001

CMD [ "node", "server.js" ]
