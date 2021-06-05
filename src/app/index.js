/**
 * Routing page of the ITS CDEPD Website
 * This can be modified to accomadate further development
 * Developed and Designed by Samitha Nanayakkara
 * Website: https://www.samithananayakkara.com
 */

import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./screens/Home"
import NotFoundScreen from "./screens/notfound"
import { removeDomain } from "./utils"

export default class App extends Component {
  constructor() {
    super()
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      this.Path = removeDomain("http://localhost:3000")
    } else {
      this.Path = process.env.PUBLIC_URL
    }
  }

  render() {
    return (
      <Router>
        <div style={{ width: "100%" }}>
          <Switch>
            <Route exact path={`${this.Path}/`}>
              <Home currentPath={`${this.Path}`} />
            </Route>
            <Route
              render={props => (
                <NotFoundScreen {...props} currentPath={`${this.Path}`} />
              )}
            ></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
