import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import BookMark from "./BookMark"
import QualitiesList from "./QualitiesList"
import Table from "./Table"

const UsersTable = ({
  users,
  onSort,
  selectedSort,
  onToggleBookMark,
  onDelete
}) => {
  const columns = {
    name: {
      name: "Имя",
      path: "name",
      component: (user) => <Link to={`/users/${user._id}`}>{user.name}</Link>
    },
    qualities: {
      name: "Качества",
      component: (user) => <QualitiesList qualities={user.qualities} />
    },
    professions: { path: "profession.name", name: "Профессия" },
    completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
    rate: { path: "rate", name: "Рейтинг" },
    bookmark: {
      path: "bookmark",
      name: "Избранное",
      component: (user) => (
        <BookMark
          onClick={() => onToggleBookMark(user._id)}
          status={user.bookmark}
        />
      )
    },
    delete: {
      component: (user) => (
        <button
          onClick={() => onDelete(user._id)}
          className="btn bg-danger text-white"
        >
          delete
        </button>
      )
    }
  }

  return (
    <Table
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
      data={users}
    />
  )
}

UsersTable.propTypes = {
  users: PropTypes.array,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default UsersTable
