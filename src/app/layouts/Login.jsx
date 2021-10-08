import React, { useState } from "react"

const Login = () => {
  const [email, setEmail] = useState()
  const handlerChange = (e) => {
    setEmail(e.target.value)
    console.log(e.target.value)
  }
  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={handlerChange}
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password"></input>
      </div>
    </form>
  )
}

export default Login
