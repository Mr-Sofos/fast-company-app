import React, { useEffect, useState } from "react"
import UsersTable from "./UsersTable"
import Pagination from "./Pagination"
import PropTypes from "prop-types"
import { paginate } from "../utils/paginate"
import _ from "lodash"
import GroupList from "./GroupList"
import api from "../api"
import SearchStatus from "./SearchStatus"

const UsersList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProf, setSelectedProf] = useState()
  const [sortedBy, setSortedBy] = useState({ puth: "name", order: "asc" })
  const [users, setUsers] = useState()

  const pageSize = 6
  const clearFilter = () => setSelectedProf()

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data))
  }, [])

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf, searchQuery])

  const handleDelete = (userId) =>
    setUsers(users.filter((user) => user._id !== userId))

  const handleToggleBookMark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark }
        }
        return user
      })
    )
    console.log(id)
  }

  const handleProfessionSelect = (item) => {
    if (searchQuery !== "") setSearchQuery("")
    setSelectedProf(item)
  }

  const handleSearchQuery = ({ target }) => {
    setSelectedProf(undefined)
    setSearchQuery(target.value)
  }

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const handleSort = (item) => {
    setSortedBy(item)
  }

  const filteredUsers = searchQuery
    ? users.filter(
        (user) =>
          user.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
      )
    : selectedProf
    ? users.filter(
        (user) =>
          JSON.stringify(user.profession) === JSON.stringify(selectedProf)
      )
    : users

  if (!users) {
    return "...loading"
  }

  const sortedUsers = _.orderBy(
    filteredUsers,
    [sortedBy.path],
    [sortedBy.order]
  )

  const count = sortedUsers.length

  const allUsers = paginate(sortedUsers, currentPage, pageSize)

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
        <input
          type="text"
          name="searchQuery"
          placeholder="Search..."
          onChange={handleSearchQuery}
          value={searchQuery}
        />
        {count > 0 && (
          <UsersTable
            users={allUsers}
            onSort={handleSort}
            selectedSort={sortedBy}
            onDelete={handleDelete}
            onToggleBookMark={handleToggleBookMark}
          />
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

UsersList.propTypes = {
  users: PropTypes.array
}

export default UsersList
