import React, { useState } from "react";
import User from "./user";
import Pagination from "./Pagination";
import PropTypes from "prop-types";
import { paginate } from "../utils/paginate";

const Users = ({ users, handleDeleteUser }) => {
  const count = users.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageIndex) => {
    console.log("page", pageIndex);
    setCurrentPage(pageIndex);
  };
  const allUsers = paginate(users, currentPage, pageSize);
  return (
    <>
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
              );
            })}
          </tbody>
        </table>
      )}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};

Users.propTypes = {
  users: PropTypes.array,
  handleDeleteUser: PropTypes.func
};

export default Users;
