import { broker } from './services'

broker.receive(data => {
  const json = JSON.parse(data.toString())
  console.log(json)
})
