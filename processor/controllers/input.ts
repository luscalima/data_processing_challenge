import { Request, Response } from 'express'
import { pipeline } from 'stream'
import csvtojson from 'csvtojson'
import { broker, cache } from '../services'
import { usePassThrough, useLogger } from '../hooks'

async function execute(req: Request, res: Response) {
  const logger = useLogger()

  logger.info('Processing started')

  pipeline(
    req,
    csvtojson(),
    usePassThrough(async raw => {
      const data = JSON.parse(raw)
      const id = data.debtId
      const exists = await cache.verifyDebt(id)
      if (exists) return
      await cache.setDebt(id)
      broker.send(raw)
    }),
    err => {
      if (err) {
        logger.error(err)
        res.status(500).send()
      } else {
        logger.info('Processing finished')
        res.status(200).send()
      }
    }
  )
}

export { execute }
