import React, { Fragment, useCallback, useMemo } from 'react'
import { useStore } from 'effector-react'
import { Counter } from '../features/counter'
import { UsersList } from '../features/users-list'
import * as appModel from './model'
import classes from './style.module.css'

export const App = () => {
  const counterInstances = useStore(appModel.$counterInstances)
  const userListInstances = useStore(appModel.$userListInstances)

  const addCounterInstance = useCallback(() => appModel.addCounterInstance(), [])
  const addUserListInstance = useCallback(() => appModel.addUserListInstance(), [])

  const renderCounters = useMemo(
    () => new Array(counterInstances)
      .fill(null)
      .map((_, key) => (
        <Counter key={key} />
      )),
    [counterInstances]
  )

  const renderUserLists = useMemo(
    () => new Array(userListInstances)
      .fill(null)
      .map((_, key) => (
        <UsersList
          key={key}
          page={key + 1}
        />
      )),
    [userListInstances]
  )

  return (
    <Fragment>
      <div className={classes.section}>
        <div style={{ margin: 16 }}>
          <div>Counter instances: {counterInstances}</div>

          <button onClick={addCounterInstance}>
            Add instance
          </button>
        </div>

        <div style={{ margin: 16 }}>
          <div>User list instances: {userListInstances}</div>

          <button onClick={addUserListInstance}>
            Add instance
          </button>
        </div>
      </div>

      <hr />

      <div className={classes.section}>
        {renderCounters}
      </div>

      <div className={classes.section}>
        {renderUserLists}
      </div>
    </Fragment>
  )
}
