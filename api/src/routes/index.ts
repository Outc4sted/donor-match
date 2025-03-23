import fp from 'fastify-plugin'
import routes from '@/routes/routes'

export default fp(
  async function (app) {
    app.register(routes, {
      prefix: '/api',
    })
  },
  {
    name: 'my-routes',
  },
)
