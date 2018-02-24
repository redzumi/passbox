import React from 'react'
import { hot } from 'react-hot-loader'

import Home from './pages/Home'

const App = () => (
  <div>
    <h1>Hello, world!</h1>
    <Home />
  </div>
)

export default hot(module)(App)
