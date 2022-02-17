import React, { useMemo } from 'react'
import { fork } from 'effector'
import { Provider, useEvent, useStore } from 'effector-react/scope'
import * as counterModel from '../../model'

const CounterView = () => {
  const decrement = useEvent(counterModel.decrement)
  const increment = useEvent(counterModel.increment)
  const reset = useEvent(counterModel.reset)
  const value = useStore(counterModel.$counter)

  return (
    <div style={{ margin: 16 }}>
      <div>
        <span>Counter: {value}</span>
      </div>

      <div>
        <button onClick={decrement}>-</button>

        <button onClick={increment}>+</button>

        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export const Counter = () => {
  const scope = useMemo(() => fork(counterModel.counterDomain), [])

  return (
    <Provider value={scope}>
      <CounterView />
    </Provider>
  )
}
