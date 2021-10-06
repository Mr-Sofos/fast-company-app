import React from "react"
import Navigation from "./NavBar"
import { Switch, Route } from "react-router-dom"
import Main from "./Main"
import Users from "./Users"
import Login from "./Login"

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/users" exact component={Users} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </>
  )
}

export default App
