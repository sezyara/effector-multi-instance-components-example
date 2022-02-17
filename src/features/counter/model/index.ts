import { counterDomain } from './domain'
import { decrement, increment, reset } from './events'

const $counter = counterDomain.createStore(0)
  .on(decrement, counter => counter - 1)
  .on(increment, counter => counter + 1)
  .reset(reset)

export {
  counterDomain,
  $counter,
  decrement,
  increment,
  reset
}
