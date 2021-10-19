import React from "react"
import PropTypes from "prop-types"

const SelectField = ({
  label,
  value,
  onChange,
  defaultOptions,
  options,
  error
}) => {
  const handleChange = ({ target }) => {
    onChange({ name: [target.name], value: target.value })
  }
  const getInputClasses = () => `form-select ${error ? "is-invalid" : ""}`
  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.keys(options).map((optionName) => ({
          name: options[optionName].name,
          value: options[optionName]._id
        }))
      : options

  return (
    <div className="mb-4">
      <label htmlFor="validationCustom04" className="form-label">
        {label}
      </label>
      <select
        value={value}
        label={label}
        className={getInputClasses()}
        name="profession"
        id="validationCustom04"
        onChange={handleChange}
      >
        <option selected={value === ""} disabled value="">
          {defaultOptions}
        </option>
        {optionsArray &&
          optionsArray.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

SelectField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  defaultOptions: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default SelectField
