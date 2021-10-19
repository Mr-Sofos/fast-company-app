import React, { useEffect, useState } from "react"
import * as yup from "yup"
import TextField from "../common/form/TextField"
import CheckBoxField from "../common/form/CheckBoxField"
// import { validator } from "../../utils/validator"

const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "", stayOn: false })
  const [errors, setErrors] = useState({})

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const validateScheme = yup.object().shape({
    password: yup
      .string()
      .required("Пароль обязательна для заполнения")
      .matches(
        /^(?=.*[A-Z])/,
        "Пароль должен содержать хотя бы одну заглавную букву"
      )
      .matches(/(?=.*[0-9])/, "Пароль должен содержать хотя бы одну цифру")
      .matches(
        /(?=.*[!@#$%^&*])/,
        "Пароль должен содержать один из специальных символов !@#$%^&*"
      )
      .matches(/(?=.{8,})/, "Пароль должен состоять минимум из 8 символов"),

    email: yup
      .string()
      .required("Електронная почта обязательна для заполнения")
      .email("Email введен некорректно")
  })

  // const validatorConfig = {
  //   email: {
  //     isRequired: {
  //       message: "Електронная почта обязательна для заполнения"
  //     },
  //     isEmail: {
  //       message: "Email введен некорректно"
  //     }
  //   },
  //   password: {
  //     isRequired: {
  //       message: "Пароль обязателен для заполнения"
  //     },
  //     isCapitalSymbol: {
  //       message: "Пароль должен содержать хотя бы одну заглавную букву"
  //     },
  //     isContainDigit: {
  //       message: "Пароль должен содержать хотя бы одну цифру"
  //     },
  //     min: {
  //       message: "Пароль должен состоять минимум из 8 символов",
  //       value: 8
  //     }
  //   }
  // }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    // const errors = validator(data, validatorConfig)
    validateScheme
      .validate(data)
      .then(() => setErrors({}))
      .catch((err) => setErrors({ [err.path]: err.message }))
    return Object.keys(errors).length === 0
  }

  const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <CheckBoxField value={data.stayOn} onChange={handleChange} name="stayOn">
        Оставаться в системе
      </CheckBoxField>
      <button
        type="submit"
        disabled={!isValid}
        className="btn btn-primary w-100 mx-auto"
      >
        Submit
      </button>
    </form>
  )
}

export default LoginForm
