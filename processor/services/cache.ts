import { createClient } from 'redis'
import { useConfig, useLogger } from '../hooks'

const logger = useLogger()
const config = useConfig()
const clientUrl = `redis://${config.cache.user}:${config.cache.pass}@${config.cache.host}:${config.cache.port}/${config.cache.db}`
const client = createClient({
  url: clientUrl
})

client.on('error', err => {
  logger.error(err)
})

await client.connect()

const DEBTS_SET = 'debts_set'

async function setDebt(id: string) {
  return client.sAdd(DEBTS_SET, id)
}

async function verifyDebt(id: string): Promise<boolean> {
  return client.sIsMember(DEBTS_SET, id)
}

export { setDebt, verifyDebt }
