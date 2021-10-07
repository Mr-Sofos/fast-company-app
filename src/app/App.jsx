import React from "react"
import NavBar from "./components/NavBar"
import { Switch, Route } from "react-router-dom"
import Main from "./layouts/Main"
import Users from "./layouts/Users"
import Login from "./layouts/Login"

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/users/:userId?" component={Users} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Main} />
      </Switch>
    </>
  )
}

export default App
