import { combineReducers } from "redux"

import todoReducer from './todoReducer'
import todoVisibilityFilter from './todoVisibilityFilter'

const reducer = combineReducers({
  todos: todoReducer,
  visibilityFilter: todoVisibilityFilter
})

export default reducer
