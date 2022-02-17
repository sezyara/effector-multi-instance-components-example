import React, { useEffect, useMemo } from 'react'
import { fork } from 'effector'
import { Provider, useEvent, useGate, useStore } from 'effector-react/scope'
import * as userListModel from '../../model'
import { UserList } from '../../types'

const UsersListView = (props: UserList.RequestParams) => {
  const list = useStore(userListModel.$list)
  const loading = useStore(userListModel.$loading)
  const page = useStore(userListModel.$page)
  const initialize = useEvent(userListModel.initialize)

  const renderItems = useMemo(() => list.map(user => <li key={user.url}>{user.name}</li>), [list])

  useGate(userListModel.params, props)
  useEffect(initialize, [initialize])

  if (loading) return <div style={{ margin: 16 }}>Loading...</div>
  if (!list.length) return <div style={{ margin: 16 }}>List is empty</div>

  return (
    <div style={{ margin: 16 }}>
      <span>
        Page: {page}&nbsp;

        {!loading && <button onClick={initialize}>Refresh</button>}
      </span>

      <ul>
        {renderItems}
      </ul>
    </div>
  )
}

export const UsersList = (props: UserList.RequestParams) => {
  const scope = useMemo(() => fork(userListModel.userListDomain), [])

  return (
    <Provider value={scope}>
      <UsersListView {...props} />
    </Provider>
  )
}
