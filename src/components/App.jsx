import React, { useState, useEffect } from "react"
import Users from "./users"
import api from "../api"

const App = () => {
  const [users, setUsers] = useState()

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data))
  }, [])

  const handleDeleteUser = (userId) =>
    setUsers(users.filter((user) => user._id !== userId))

  if (!users) {
    return "loading..."
  }

  return <Users handleDeleteUser={handleDeleteUser} users={users} />
}

export default App
