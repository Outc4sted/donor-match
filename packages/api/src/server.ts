import app from '@/app'
import config from '@/config'

const appName = '@donor-match/api'

;(async () => {
  const { port, host } = config.Node

  const server = await app(appName)

  server.listen({ port, host }, (error) => {
    if (error) {
      server.log.error(`Error starting ${appName}`)
      throw new Error(error.message)
    } else server.log.info(`Successfully started ${appName}`)
  })
})()
