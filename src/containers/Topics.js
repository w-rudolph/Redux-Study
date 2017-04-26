import React from 'react'
import {connect} from 'react-redux'
import {getAllTopics} from '../actions/cnode.js'
import TopicItem from '../components/TopicItem'

class Topics extends React.Component{
    constructor(props){
        super(props);
        const {dispatch, getAllTopics} = this.props;
        dispatch(getAllTopics());
    }
    render(){
        
        const {topics} = this.props;
        return (
                <div id="cnode-topics">
                    <div>API地址：<a href="https://cnodejs.org/api" target="_blank">https://cnodejs.org/api</a></div>
                    <span style={{fontSize:'1.5em', fontWeight:'bold'}}>话题</span>
                    <ul className="topics">
                    {topics.map((topic, index) => {
                        return (
                            <TopicItem key={index} topic={topic}  /> 
                        )
                    })}
                    </ul>
                </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        topics: state.topics,
        getAllTopics
    }
}
export default connect(mapStateToProps)(Topics);