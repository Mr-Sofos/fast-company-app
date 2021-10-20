import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import NavBar from "./components/ui/NavBar"
import Main from "./layouts/Main"
import Users from "./layouts/Users"
import Login from "./layouts/Login"

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/users/:userId?/:edit?" component={Users} />
        <Route path="/login/:type?" component={Login} />
        <Route path="/" exact component={Main} />
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default App
