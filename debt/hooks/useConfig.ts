import { config } from 'dotenv'

const path = './.env'

config({ path })

export function useConfig() {
  const env = {
    broker: {
      host: process.env.BROKER_HOST ?? 'localhost',
      port: process.env.BROKER_PORT ?? '5672',
      user: process.env.BROKER_USER ?? 'guest',
      pass: process.env.BROKER_PASS ?? 'guest'
    },
    server: {
      port: process.env.SERVER_PORT ?? '3000'
    },
    queue: {
      name: process.env.QUEUE_NAME ?? 'debt_queue'
    }
  }

  return env
}
