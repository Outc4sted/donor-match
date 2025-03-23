FROM oven/bun:latest as base
WORKDIR /app
COPY package.json bun.lockb ./

FROM base AS build-deps
RUN bun install --frozen-lockfile

FROM build-deps AS build
COPY . .
RUN bun run build

FROM nginx:alpine AS runtime
COPY ./config/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 3000
