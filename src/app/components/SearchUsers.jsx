import React from "react"
import PropTypes from "prop-types"

const SearchUsers = ({ searchUser, onChange }) => {
  return (
    <div className="input-group p-1">
      <div className="form-outline w-100">
        <input
          type="search"
          id="searchUsers"
          className="form-control"
          placeholder="Search..."
          value={searchUser}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

SearchUsers.propTypes = {
  searchUser: PropTypes.string,
  onChange: PropTypes.func
}

export default SearchUsers
