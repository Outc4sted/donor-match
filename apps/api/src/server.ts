import app from './app.ts'

const appName = '@donor-match/api'

;(async () => {
  const server = await app(appName)

  server.listen(
    { port: DMNO_CONFIG.NODE_PORT, host: DMNO_CONFIG.NODE_HOST },
    (error) => {
      if (error) {
        server.log.error(`Error starting ${appName}`)
        throw new Error(error.message)
      } else server.log.info(`Successfully started ${appName}`)
    },
  )
})()
