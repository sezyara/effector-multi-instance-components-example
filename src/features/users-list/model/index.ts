import { sample } from 'effector'
import { createGate } from 'effector-react/scope'
import { userListDomain } from './domain'
import { getUsersListFx } from './effects'
import { initialize, reset } from './events'
import { UserList } from '../types'

const params = createGate<UserList.RequestParams>({
  defaultState: { page: 1 },
  domain: userListDomain
})

const $list = userListDomain.createStore<Array<UserList.User>>([])
  .on(getUsersListFx.done, (_, { result }) => result.results)
  .reset([reset, getUsersListFx.fail])

const $page = userListDomain.createStore(0)
  .on(getUsersListFx.done, (_, { params }) => params.page)
  .reset([reset, getUsersListFx.fail])

const $loading = getUsersListFx.pending

sample({
  clock: initialize,
  source: params.state,
  target: getUsersListFx
})

export {
  params,
  userListDomain,
  $list,
  $loading,
  $page,
  initialize,
  reset
}
