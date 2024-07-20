import { Router } from 'express'
import { input } from '../controllers'

const router = Router()

router.get('/health', (req, res) => {
  res.status(200).send('OK')
})

router.post('/input', input.execute)

export default router
