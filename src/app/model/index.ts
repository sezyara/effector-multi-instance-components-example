import { createStore } from 'effector'
import { addCounterInstance, addUserListInstance, reset } from './events'

const $counterInstances = createStore(1)
  .on(addCounterInstance, value => value + 1)
  .reset(reset)

const $userListInstances = createStore(1)
  .on(addUserListInstance, value => value + 1)
  .reset(reset)

export {
  $counterInstances,
  $userListInstances,
  addCounterInstance,
  addUserListInstance,
  reset
}
