import { createStore, combineReducers } from 'redux'
import todoList from './reducer/todoList';
import loading from './reducer/loading'

const store = createStore(combineReducers({todoList, loading}))
export default store