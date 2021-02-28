import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'

import store from './store'
import App from './components/App'
 

import { Provider } from 'react-redux'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store= {store}>
      <App />
    </Provider>,
    document.getElementById('app')
)
})