import React, { useEffect, useState } from "react"
import User from "./user"
import Pagination from "./Pagination"
import PropTypes from "prop-types"
import { paginate } from "../utils/paginate"
import GroupList from "./GroupList"
import api from "../api"
import SearchStatus from "./SearchStatus"

const Users = ({ users, handleDeleteUser }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()

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
  const pageSize = 2

  const filteredUsers = selectedProf
    ? users.filter((user) => user.profession.name === selectedProf.name)
    : users

  const count = filteredUsers.length
  const allUsers = paginate(filteredUsers, currentPage, pageSize)

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
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Имя</th>
                <th scope="col">Профессия</th>
                <th scope="col">Качества</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Рейтинг</th>
                <th scope="col">Избранное</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user) => {
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
  users: PropTypes.array,
  handleDeleteUser: PropTypes.func
}

export default Users
