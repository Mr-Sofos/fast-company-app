import React from "react"
import PropTypes from "prop-types"

const SearchUsers = ({ searchUser, onChange }) => {
  return (
    <div className="input-group">
      <div className="form-outline">
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
