import React from "react"
import PropTypes from "prop-types"

const RadioField = ({ options, name, onChange, value, label }) => {
  return (
    <div className="mb-4">
      <label htmlFor="validationCustom04" className="form-label">
        {label}
      </label>
      <input
        className="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio1"
        value="option1"
      />
      <label className="form-check-label" htmlFor="inlineRadio1">
        1
      </label>
    </div>
  )
}

RadioField.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string
}

export default RadioField
