import { config } from 'dotenv'

const path = './.env'

config({ path })

export function useConfig() {
  const env = {
    server: {
      port: process.env.SERVER_PORT ?? '3000'
    },
    broker: {
      host: process.env.BROKER_HOST ?? 'localhost',
      port: process.env.BROKER_PORT ?? '5672',
      user: process.env.BROKER_USER ?? 'guest',
      pass: process.env.BROKER_PASS ?? 'guest'
    },
    cache: {
      host: process.env.CACHE_HOST ?? 'localhost',
      port: process.env.CACHE_PORT ?? '6379',
      user: process.env.CACHE_USER ?? '',
      pass: process.env.CACHE_PASS ?? '',
      db: process.env.CACHE_DB ?? '0'
    }
  }

  return env
}
