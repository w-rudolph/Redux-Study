import {counter} from './counter';
import {topics, topic, user} from './cnode';
import {todos,visibilityFilter} from './todos';
import { combineReducers } from 'redux'

export default combineReducers({counter,todos,visibilityFilter,topic, topics, user});