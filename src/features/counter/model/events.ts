import { counterDomain } from './domain'

export const decrement = counterDomain.createEvent()

export const increment = counterDomain.createEvent()

export const reset = counterDomain.createEvent()
