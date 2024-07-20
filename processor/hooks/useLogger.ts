import pino from 'pino'

// TODO: add integration with elasticsearch

export function useLogger() {
  return pino({
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true
      }
    }
  })
}
