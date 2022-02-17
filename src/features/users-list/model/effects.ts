import { userListDomain } from './domain'
import { UserList } from '../types'

export const getUsersListFx = userListDomain.createEffect(async (params: UserList.RequestParams) => {
  const query = new URLSearchParams()

  Object
    .entries(params)
    .forEach(([key, value]) => query.append(key, value))

  const res = await fetch(`https://swapi.dev/api/people?${query.toString()}`)

  return res.json() as Promise<UserList.ResponseData>
})
