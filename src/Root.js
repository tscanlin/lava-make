import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import { makeRoutes } from './routes'
import { Router, browserHistory, createMemoryHistory } from 'react-router'
import { isBrowser } from './utils'

export const history = isBrowser ? browserHistory : createMemoryHistory()
// import Layout from './Layout'
// import Counter from './Counter'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

const store = configureStore({}) // window.__INITIAL_STATE__); // eslint-disable-line
const reduxHistory = syncHistoryWithStore(history, store)


export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history} routes={makeRoutes()} />
      </Provider>
    )
  }
}
