import React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'

import Authenticate from '../components/pages/User/Authenticate'
import CreateAccount from '../components/pages/User/CreateAccount'
import Home from '../components/pages/Home'
import NotFound from '../components/pages/NotFound'
import Passwords from '../components/pages/Passwords'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Authenticate} />
    <Route exact path="/create" component={CreateAccount} />
    <Route exact path="/passwords" component={Passwords} />
    <Route component={NotFound} />
  </Switch>
)

export default hot(module)(App)
