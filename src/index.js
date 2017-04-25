import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'
import Counter from './containers/Counter'
import Todo from './containers/Todo'
import App from './components/App'
import './index.css'

const store = createStore(reducer);
window.store = store;
ReactDom.render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRedirect to='/counter'/>
                <Route path='/counter' component={Counter}></Route>
                <Route path='/todo' component={Todo}></Route>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));