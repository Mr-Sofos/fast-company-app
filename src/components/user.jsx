import React from "react"
import PropTypes from "prop-types"
import Qualitie from "./Qualitie"
import BookMark from "./BookMark"

const User = ({ user, handleDeleteUser }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.profession.name}</td>
      <Qualitie qualities={user.qualities} />
      <td className="text-center">{user.completedMeetings}</td>
      <td className="text-center">{user.rate} /5</td>
      <BookMark />
      <td>
        <span
          onClick={() => handleDeleteUser(user._id)}
          className="bg-danger p-1 m-1 rounded text-white spanDelete"
        >
          delete
        </span>
      </td>
    </tr>
  )
}

User.propTypes = {
  user: PropTypes.object,
  handleDeleteUser: PropTypes.func
}

export default User
