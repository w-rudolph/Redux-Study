import React, { Component } from 'react'
import SideBar from './SideBar'
import './App.css'

class App extends Component{
    render(){
        const {children} = this.props;
        return (
            <div className="container">
                <SideBar path={this.props.location.pathname} />
                <div id="main">{children}</div>
            </div>
        )
    }
}
export default App;