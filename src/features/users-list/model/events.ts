import { userListDomain } from './domain'

export const initialize = userListDomain.createEvent()

export const reset = userListDomain.createEvent()
