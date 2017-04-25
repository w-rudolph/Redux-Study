import {counter} from './counter';
import {todos,visibilityFilter} from './todos';
import { combineReducers } from 'redux'

export default combineReducers({counter,todos,visibilityFilter});