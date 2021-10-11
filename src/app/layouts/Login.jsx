import React, { useEffect, useState } from "react"
import TextField from "../components/TextField"

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" })
  const [errors, setErrors] = useState()

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = {}
    for (const fieldName in data) {
      if (data[fieldName].trim() === "") {
        errors[fieldName] = `${fieldName} обязательно для заполнения`
      }
    }
    setErrors(errors)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validate()
    if (Object.keys(errors).length !== 0) return
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="email"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <TextField
        label="password"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Login
