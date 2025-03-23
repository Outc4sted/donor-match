const NodeConfig = {
  env: process.env.NODE_ENVIRONMENT || 'development',
  port: Number(process.env.NODE_PORT) || 3001,
  host: process.env.NODE_HOST || '127.0.0.1',
}

const FrontendConfig = {
  host: 'http://localhost:3000',
}

const DatabaseConfig = {
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'password',
  name: process.env.POSTGRES_DB || 'donor-match',
  port: process.env.POSTGRES_PORT || '5432',
  host: process.env.POSTGRES_HOST || '127.0.0.1',
}

const ClerkConfig = {
  publishableKey: process.env.CLERK_PUBLISHABLE_KEY || 'publishable key',
  secretKey: process.env.CLERK_SECRET_KEY || 'secret key',
  jwtKey: process.env.CLERK_JWT_KEY || 'jwt key',
}

const LoggerConfig = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
      serializers: {
        res(reply) {
          return {
            statusCode: reply.statusCode,
          }
        },
        req(request) {
          return {
            method: request.method,
            url: request.url,
            path: request.routeOptions.url,
            parameters: request.params,
            headers: request.headers,
          }
        },
      },
    },
  },
  production: true,
  test: false,
}

export default {
  Node: NodeConfig,
  Frontend: FrontendConfig,
  Database: DatabaseConfig,
  Clerk: ClerkConfig,
  Logger: LoggerConfig,
}
