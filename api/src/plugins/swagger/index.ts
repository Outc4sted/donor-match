import { type FastifyInstance } from 'fastify'
import fp from 'fastify-plugin'
import FastifySwagger, {
  type FastifyDynamicSwaggerOptions,
} from '@fastify/swagger'
import FastifySwaggerUi, {
  type FastifySwaggerUiOptions,
} from '@fastify/swagger-ui'

const swaggerConfig: FastifyDynamicSwaggerOptions = {
  openapi: {
    info: {
      title: 'Donor Match',
      description: 'Donor Match API Documentation',
      version: '1.0.0',
    },
    tags: [
      { name: 'Organs', description: 'Organ endpoints' },
      { name: 'Patients', description: 'Patient endpoints' },
    ],
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
  refResolver: {
    buildLocalReference(json, _baseUri, _fragment, i) {
      return typeof json.$id === 'string' ? `${json.$id}Schema` : `def-${i}`
    },
  },
}

const swaggerUiConfig: FastifySwaggerUiOptions = {
  routePrefix: '/docs',
}

export default fp(async function (fastify: FastifyInstance) {
  await fastify.register(FastifySwagger, swaggerConfig)
  await fastify.register(FastifySwaggerUi, swaggerUiConfig)
})
