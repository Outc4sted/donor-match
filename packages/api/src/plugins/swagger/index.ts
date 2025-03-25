import { type FastifyInstance } from 'fastify'
import fp from 'fastify-plugin'
import { contract } from '@donor-match/ts-rest'
import { generateOpenApi } from '@ts-rest/open-api'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUI from '@fastify/swagger-ui'

const openApiDocument = generateOpenApi(
  contract,
  {
    info: {
      title: 'Donor Match',
      description: 'Donor Match API Documentation',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  {
    setOperationId: true,
  },
)

export default fp(async function (fastify: FastifyInstance) {
  await fastify
    .register(fastifySwagger, {
      transformObject: () => openApiDocument,
    })
    .register(fastifySwaggerUI, {
      routePrefix: '/api-docs',
    })
})
