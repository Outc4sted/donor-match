import app from '@/app'
import config from '@/config'
import pkg from '../package.json'
;(async () => {
  const { port, host } = config.Node

  const server = await app(pkg.name)

  server.listen({ port, host }, (error) => {
    if (error) {
      server.log.error(`Error starting ${pkg.name}`)
      throw new Error(error.message)
    } else server.log.info(`Successfully started ${pkg.name}`)
  })
})()
