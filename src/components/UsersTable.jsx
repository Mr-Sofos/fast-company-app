import React from "react"
// import User from "./User"
import PropTypes from "prop-types"
import TableHeader from "./TableHeader"
import TableBody from "./TableBody"

const UsersTable = ({ users, onSort, selectedSort, ...rest }) => {
  const columns = {
    name: { path: "name", name: "Имя" },
    qualities: { name: "Качества" },
    professions: { path: "profession.name", name: "Профессия" },
    completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
    rate: { path: "rate", name: "Рейтинг" },
    bookmark: { path: "bookmark", name: "Избранное" },
    delete: {}
  }
  return (
    <table className="table">
      <TableHeader {...{ onSort, selectedSort, columns }} />
      <TableBody {...{ columns, data: users, ...rest }} />
      {/* <tbody>
        {users.map((user) => {
          return <User user={user} key={user._id} {...rest} />
        })}
      </tbody> */}
    </table>
  )
}

UsersTable.propTypes = {
  users: PropTypes.array,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired
}

export default UsersTable
