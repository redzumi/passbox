import React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'

import Authenticate from '../components/pages/User/Authenticate'
import CreateAccount from '../components/pages/User/CreateAccount'

import NotFound from '../components/pages/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={Authenticate} />
    <Route exact path="/login" component={Authenticate} />
    <Route exact path="/create" component={CreateAccount} />
    <Route component={NotFound} />
  </Switch>
)

export default hot(module)(App)
