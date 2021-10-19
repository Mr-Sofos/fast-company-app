import React, { useState } from "react"
import PropTypes from "prop-types"

const TextField = ({ label, type, name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleChange = ({ target }) => {
    onChange({ name: [target.name], value: target.value })
  }
  const toogleShowPassword = () => {
    return setShowPassword((prevState) => !prevState)
  }
  const getInputClasses = () => `form-control ${error ? "is-invalid" : ""}`
  return (
    <div className="mb-4">
      <label htmlFor="validationCustom04" className="form-label">
        {label}
      </label>
      <div className="input-group has-content">
        <input
          type={showPassword ? "text" : type}
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
          className={getInputClasses()}
        />
        {type === "password" && (
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={toogleShowPassword}
          >
            <i className={`bi bi-eye${!showPassword ? "-slash" : ""}`}></i>
          </button>
        )}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
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
  onChange: PropTypes.func,
  error: PropTypes.string
}

export default TextField
