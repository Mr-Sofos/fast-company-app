import React from "react";

const User = ({ user, handleDelete }) => {
  const getQualities = (qualities) => {
    return qualities.map((qualitie) => (
      <span className={`m-1 p-1 rounded text-light bg-${qualitie.color}`}>
        {qualitie.name}
      </span>
    ));
  };
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.profession.name}</td>
      <td>{getQualities(user.qualities)}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate} / 5</td>
      <td>
        <span
          onClick={() => handleDelete(user._id)}
          className="bg-danger p-1 m-1 rounded text-white spanDelete"
        >
          delete
        </span>
      </td>
    </tr>
  );
};

export default User;
