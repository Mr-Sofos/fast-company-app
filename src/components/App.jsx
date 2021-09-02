import React, { useState } from "react";
import Users from "./users";
import api from "../api";
import SearchStatus from "./SearchStatus";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDeleteUser = (userId) =>
    setUsers(users.filter((user) => user._id !== userId));

  return (
    <>
      <SearchStatus usersCount={users.length} />
      <Users handleDeleteUser={handleDeleteUser} users={users} />
    </>
  );
};

export default App;
