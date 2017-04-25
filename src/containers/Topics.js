import React from 'react'
import {connect} from 'react-redux'
import {getAllTopics} from '../actions/cnode.js'
import {Link} from 'react-router'

class Topics extends React.Component{
    constructor(props){
        super(props);
        this.props.getAllTopics();
    }
    getTopicTab(tab){
        return {
            ask: '问答',
            share: '分享',
            job: '工作'
        }[tab];
    }
    render(){
        
        const {topics} = this.props;
        return (
                    <div id="cnode-topics">
                        <ul className="topics">
                        {topics.map((topic, index) => {
                            return (
                                <li key={index} className="topic-item">
                                    <a href='javascript:void(0)' title={topic.author.loginname}><img width="30" height="30" src={topic.author.avatar_url} alt="" /></a>&nbsp;
                                    <span>
                                        <span className="reply_count">{topic.reply_count}</span> / <span className="visit_count">{topic.visit_count}</span>
                                    </span>&nbsp;
                                    {topic.top ? <span className="put_top">置顶</span> : ""}
                                    {!topic.top && topic.good ? <span className="put_good">精华</span> : ""}
                                    {!topic.top && !topic.good ? <span className="topic_tab">{this.getTopicTab(topic.tab)}</span> : ''}&nbsp;
                                    <span className="topic-title">
                                        <Link title={topic.title} to={'topic/' + topic.id}>{topic.title}</Link>
                                    </span>
                                </li>
                            )
                        })}
                        </ul>
                    </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        topics: state.topics
    }
}
export default connect(mapStateToProps,{getAllTopics})(Topics);