import type { FastifyReply, FastifyRequest } from 'fastify'

export const LoggerConfig = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
      serializers: {
        res(reply: FastifyReply) {
          return {
            statusCode: reply.statusCode,
          }
        },
        req(request: FastifyRequest) {
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
