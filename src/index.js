import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import Counter from './containers/Counter'
import Todo from './containers/Todo'
import App from './components/App'
import Topics from './containers/Topics'
import Topic from './containers/Topic'
import User from './containers/User'

import {logAction} from './middlewares/logAction'
import './index.css'


const middleWares = [thunk, logAction];
const store = createStore(reducer, applyMiddleware(...middleWares));
window.store = store;
ReactDom.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRedirect to='/counter'/>
                <Route path='/counter' component={Counter}></Route>
                <Route path='/todo' component={Todo}></Route>
                <Route path='/topics' component={Topics}></Route>
                <Route path='/topic/:id' component={Topic}></Route>
                <Route path='/user/:id' component={User}></Route>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));