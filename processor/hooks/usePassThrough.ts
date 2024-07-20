import { PassThrough } from 'stream'

export function usePassThrough(cb: (chunk: any) => void) {
  return new PassThrough({
    objectMode: true,
    transform(chunk, encoding, callback) {
      cb(chunk)
      callback()
    }
  })
}
