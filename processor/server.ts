import express from 'express'
import { useConfig, useLogger } from './hooks'
import router from './routes'

const config = useConfig()
const app = express()
const logger = useLogger()

app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(config.server.port, () => {
  logger.info(`Server started at http://localhost:${config.server.port}`)
})
