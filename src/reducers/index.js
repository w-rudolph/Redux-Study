import {counter} from './counter';
import {topics, topic} from './cnode';
import {todos,visibilityFilter} from './todos';
import { combineReducers } from 'redux'

export default combineReducers({counter,todos,visibilityFilter,topic, topics});