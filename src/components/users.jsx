import React, { useEffect, useState } from "react"
import UsersTable from "./UsersTable"
import Pagination from "./Pagination"
import PropTypes from "prop-types"
import { paginate } from "../utils/paginate"
import _ from "lodash"
import GroupList from "./GroupList"
import api from "../api"
import SearchStatus from "./SearchStatus"

const Users = ({ users, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()
  const [sortedBy, setSortedBy] = useState({ iter: "name", order: "asc" })

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])

  const handleProfessionSelect = (item) => {
    setSelectedProf(item)
  }

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const handleSort = (item) => {
    if (sortedBy.iter === item) {
      setSortedBy((prevState) => ({
        ...prevState,
        order: prevState.order === "asc" ? "desc" : "asc"
      }))
    } else {
      setSortedBy({ iter: item, order: "asc" })
    }
  }
  const pageSize = 6

  const filteredUsers = selectedProf
    ? users.filter(
        (user) =>
          JSON.stringify(user.profession) === JSON.stringify(selectedProf)
      )
    : users

  const count = filteredUsers.length
  const sortedUsers = _.orderBy(
    filteredUsers,
    [sortedBy.iter],
    [sortedBy.order]
  )
  const allUsers = paginate(sortedUsers, currentPage, pageSize)

  const clearFilter = () => setSelectedProf()

  return (
    <div className="d-flex">
      {professions && (
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            items={professions}
            onItemSelect={handleProfessionSelect}
            selectedItem={selectedProf}
            clearFilter={clearFilter}
          />
        </div>
      )}
      <div className="flex-column">
        <SearchStatus usersCount={count} />
        {count > 0 && (
          <UsersTable users={allUsers} onSort={handleSort} {...rest} />
        )}
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.array
}

export default Users
