import React from 'react'
import User from './user'

const Users = ({users, handleDeleteUser}) => {
  return (
    <div className='usersTable'>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>Имя</th>
            <th scope='col'>Профессия</th>
            <th scope='col'>Качества</th>
            <th className='text-center' scope='col'>
              Встретился, раз
            </th>
            <th className='text-center' scope='col'>
              Рейтинг
            </th>
            <th className='text-center' scope='col'>
              Избранное
            </th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <User
                user={user}
                key={user._id}
                handleDeleteUser={handleDeleteUser}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Users
