import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import PropTypes from "prop-types"
import api from "../../../api"

import Qualities from "./../../ui/qualities"

const UserPage = ({ userId }) => {
  const [user, setUser] = useState()
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data))
  })
  const history = useHistory()
  if (user) {
    return (
      <div>
        <h1>{user.name}</h1>
        <h1>Профессия {user.profession.name}</h1>
        <p>
          <Qualities qualities={user.qualities} />
        </p>
        <p>completedMeetings: {user.completedMeetings}</p>
        <h3>Rate: {user.rate}</h3>
        <button
          className="btn btn-primary m-1"
          onClick={() => history.push("/users")}
        >
          все пользователи
        </button>
      </div>
    )
  } else {
    return <h1>Loading...</h1>
  }
}

UserPage.propTypes = {
  userId: PropTypes.string.isRequired
}

export default UserPage
