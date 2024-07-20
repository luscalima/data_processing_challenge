import { Transform } from 'stream'

export function useTransform(cb: (data: any) => Buffer) {
  return new Transform({
    objectMode: true,
    transform(chunk, encoding, callback) {
      callback(null, cb(chunk))
    }
  })
}
