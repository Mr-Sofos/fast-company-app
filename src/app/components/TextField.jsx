import React from "react"
import PropTypes from "prop-types"

const TextField = ({ label, type, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

TextField.defaultProps = {
  type: "text"
}

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default TextField
