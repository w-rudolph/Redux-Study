import React from 'react'
import {connect} from 'react-redux'
import {delay} from '../utils'
import {ADD_ONE, MINUS_ONE} from '../actions'

class App extends React.Component{
    btnClick(dir){
        const {dispatch} = this.props;
        const type = dir === -1 ? MINUS_ONE : ADD_ONE;
        delay(10, ()=>{dispatch({type:type})})
    }
    render(){
        const {counter} = this.props;
        const attr = {};
        if(counter.num <= 0) attr.disabled = true;
        return <div>
        <button {...attr} onClick={this.btnClick.bind(this, -1)}>-</button>
            &nbsp;&nbsp;{counter.num}&nbsp;&nbsp;
        <button onClick={this.btnClick.bind(this, 1)}>+</button>
        </div>
    }
}
const mapStateToProps = (state, ownProps) => {
    return state
}
export default connect(mapStateToProps)(App);