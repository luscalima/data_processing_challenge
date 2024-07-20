import broker from 'amqplib'
import { useConfig } from '../hooks'

const QUEUE = 'mail_queue'
const config = useConfig()
const connection = await broker.connect({
  hostname: config.broker.host,
  port: Number(config.broker.port),
  username: config.broker.user,
  password: config.broker.pass
})

const channel = await connection.createChannel()

channel.assertQueue(QUEUE, { durable: true })

function send(data: Buffer) {
  channel.sendToQueue(QUEUE, data, { persistent: true })
}

function receive(callback: (data: Buffer) => void) {
  channel.consume(config.queue.name, message => {
    if (message) {
      callback(message.content)
      channel.ack(message)
    }
  })
}

export { send, receive, QUEUE }
