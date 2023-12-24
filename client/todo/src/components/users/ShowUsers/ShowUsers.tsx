import React, { FC, useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { UserApi } from '../../../api/users';
import { IUser, IUserState } from '../../../types/types';
export const ShowUsers: FC = () => {
  const [stateUsers, setStateUsers] = useState<IUser[]>([])
  useEffect(() => {
    const users = async () => {
      setStateUsers(await UserApi.getAllUsers());
    }
    users()
}, )
  console.log(stateUsers)
  return (
    <TransitionGroup component='ul' className="list-group">
      {stateUsers.map(user => (
        <CSSTransition
          timeout={800}
          classNames={'user'}
          key={user.id}
        >
          <li className={`todo-item list-group-item d-flex justify-content-between align-items-center`}>
            {user.id} {user.name} {user.email}
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}
