import React, { useState } from "react";
import User from "./user";
import api from "../api";
const pluralize = require("numeralize-ru").pluralize;

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) =>
    setUsers(users.filter((user) => user._id !== userId));
  const peoples = pluralize(users.length, "человек", "человека", "человека");
  const party = pluralize(users.length, "тусанет", "тусанут", "тусанут");

  if (!users.length) {
    return (
      <span className="bg-danger p-1 m-1 rounded">
        Никто с тобой не тусанет сегодня
      </span>
    );
  }

  return (
    <div className="usersTable">
      <span className="bg-primary p-1 m-1 rounded text-white">
        {users.length} {peoples} {party} с тобой сегодня
      </span>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Профессия</th>
            <th scope="col">Качества</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Рейтинг</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <User
                user={user}
                key={user._id}
                setUsers={setUsers}
                handleDelete={handleDelete}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
