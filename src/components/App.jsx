import React from "react"
import Navigation from "./NavBar"
import { Switch, Route } from "react-router-dom"
import Main from "./Main"
import Users from "./Users"

const App = () => {
  return (
    <>
      <Navigation />

      <Switch>
        <Route to="/" exact component={Main} />
        <Route to="/users" exact component={Users} />
      </Switch>
    </>
  )
}

export default App
