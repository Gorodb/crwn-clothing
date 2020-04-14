import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from 'react-redux'

import store from "./redux/store"

import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
          <Router>
              <App />
          </Router>
      </React.StrictMode>
    </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
