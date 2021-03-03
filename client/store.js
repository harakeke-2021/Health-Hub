import { createStore } from 'redux'

import CalorieReducer from './reducer'

const store = createStore(CalorieReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
