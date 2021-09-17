import React from "react"
import User from "./User"
import PropTypes from "prop-types"
import TableHeader from "./TableHeader"

const UsersTable = ({ users, onSort, selectedSort, ...rest }) => {
  const columns = {
    name: { iter: "name", name: "Имя" },
    qualities: { name: "Качества" },
    professions: { iter: "profession.name", name: "Профессия" },
    completedMeetings: { iter: "completedMeetings", name: "Встретился, раз" },
    rate: { iter: "rate", name: "Рейтинг" },
    bookmark: { iter: "bookmark", name: "Избранное" },
    delete: {}
  }
  return (
    <table className="table">
      <TableHeader {...{ onSort, selectedSort, columns }} />
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
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired
}

export default UsersTable
