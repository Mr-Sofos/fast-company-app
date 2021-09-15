import React from "react"
import User from "./User"
import PropTypes from "prop-types"

const UsersTable = ({ users, onSort, ...rest }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("name")} scope="col">
            Имя
          </th>
          <th onClick={() => onSort("profession.name")} scope="col">
            Профессия
          </th>
          <th scope="col">Качества</th>
          <th onClick={() => onSort("completedMeetings")} scope="col">
            Встретился, раз
          </th>
          <th onClick={() => onSort("rate")} scope="col">
            Рейтинг
          </th>
          <th onClick={() => onSort("bookmark")} scope="col">
            Избранное
          </th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return <User user={user} key={user._id} {...rest} />
        })}
      </tbody>
    </table>
  )
}

UsersTable.propTypes = {
  users: PropTypes.array,
  onSort: PropTypes.func.isRequired
}

export default UsersTable
