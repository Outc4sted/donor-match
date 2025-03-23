# CV-CMS [![🛰️ Deploy app](https://github.com/Outc4sted/cv-cms/actions/workflows/deploy-app.yaml/badge.svg)](https://github.com/Outc4sted/cv-cms/actions/workflows/deploy-app.yaml)
Astro/React SSG using Directus CMS, Postgres and Redis

## Getting Started
1. Clone this repo and navigate to the root directory
    - `git clone https://github.com/Outc4sted/cv-cms.git`
    - `cd .\cv-cms`
2. Install the linting and prettier packages
    - `bun install`
3. Navigate to the app directory and install the project packages
    - `cd .\app`
    - `bun install`
4. Install recommended extensions with VSCode
5. Set your environment variables
6. Run docker-compose to build a Docker image and container for each stack
    - `docker compose up -d`

## Stacks
| Stack | Environment Variables | Docker | Image | Ports |
| ----- | --------------------- | ------ | ----- | ----- |
[**Astro**](https://github.com/Outc4sted/cv-cms/blob/master/app) | [`.env`](https://github.com/Outc4sted/cv-cms/blob/master/app/config/.env) | [`Dockerfile`](https://github.com/Outc4sted/cv-cms/blob/master/app/Dockerfile) | `cv-cms-astro` | `3000:80`
[**Directus**](https://github.com/Outc4sted/cv-cms/blob/master/directus) | [`.env`](https://github.com/Outc4sted/cv-cms/blob/master/directus/config/.env) | [`docker-compose.yaml`](https://github.com/Outc4sted/cv-cms/blob/master/docker-compose.yaml) | `directus/directus` | `2999:8055`
[**Adminer**](https://hub.docker.com/_/adminer) | `none` | [`docker-compose.yaml`](https://github.com/Outc4sted/cv-cms/blob/master/docker-compose.yaml) | `adminer` | `3002:8080`
[**Postgres**](https://hub.docker.com/_/postgres) | [`.env`](https://github.com/Outc4sted/cv-cms/blob/master/directus/config/.env) | [`docker-compose.yaml`](https://github.com/Outc4sted/cv-cms/blob/master/docker-compose.yaml) | `postgres` | `5432:5432`
[**Redis**](https://hub.docker.com/_/redis) | [`.env`](https://github.com/Outc4sted/cv-cms/blob/master/directus/config/.env) | [`docker-compose.yaml`](https://github.com/Outc4sted/cv-cms/blob/master/docker-compose.yaml) | `redis` | `6379:6379`

## Tech
- [Docker](https://www.docker.com)
- [Nginx](https://www.nginx.com)
- [Directus](https://directus.io)
- [Postgres](https://www.postgresql.org)
- [Redis](https://redis.io)
- [Astro](https://astro.build)
- [Typescript](https://www.typescriptlang.org)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [XO Linter](https://github.com/xojs/xo)
- [Prettier](https://prettier.io)
- [Husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)
