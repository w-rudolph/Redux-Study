import React, { Component } from 'react'
import './SideBar.css'
import { Link } from 'react-router'

class SideBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            sideBars:[{
                path: '/counter',
                text: '计数器'
            },
            {
                path: '/todo',
                text: 'todo 列表'
            },
            {
                path: '/topics',
                text: 'Cnode API Demo'
            }]
        }
    }
    render(){
        const { sideBars } = this.state;
        const currentPath = this.props.path;
        const sideBarHeight = window.innerHeight;
        return (
            <div id="sideBar" style={{height:sideBarHeight}}>
                <ul className="sideBar-items">
                {sideBars.map((item, index) => {
                    return (item.path === currentPath ? 
                    <li className="active sideBar-item" key={index}>{item.text}</li> : 
                    <li className="sideBar-item" key={index}><Link to={item.path}>{item.text}</Link></li>)
                })}
                </ul>
            </div>
        )
    }
}
export default SideBar;