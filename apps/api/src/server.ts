import { app, appName } from './app.ts'

try {
  const server = await app()

  await server.listen({
    port: DMNO_CONFIG.NODE_PORT,
    host: DMNO_CONFIG.NODE_HOST,
  })

  server.log.info(`Successfully started ${appName}`)
} catch (error) {
  console.error(`Error starting ${appName}:`, error)
  process.exit(1)
}
