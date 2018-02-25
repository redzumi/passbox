import createHistory from 'history/createBrowserHistory'
import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import configureStore from '../store/configureStore'

import Home from '../components/pages/Home'

const history = createHistory()
const store = configureStore(history)

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Home} />
        <Route path="/topics" component={Home} />
      </div>
    </ConnectedRouter>
  </Provider>
)

export default hot(module)(App)
