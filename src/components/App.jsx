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
        <Route path="/" exact component={Main} />
        <Route path="/users" exact component={Users} />
      </Switch>
    </>
  )
}

export default App
