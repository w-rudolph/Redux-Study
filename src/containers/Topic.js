import React from 'react'
import {connect} from 'react-redux'
import {getTopic} from '../actions/cnode.js'
import {getDateDiff} from '../utils'

class Topic extends React.Component {
    
    constructor(props){
        super(props);
        const {id} = this.props.params;
        this.props.getTopic(id);
    }
    getTopicTab(tab){
        return {
            ask: '问答',
            share: '分享',
            job: '工作'
        }[tab];
    }
    render(){
        const topic = this.props.topic;
        return (

                     <div id="cnode-topics">
                        {topic.top ? <span className="put_top">置顶</span> : ""}
                        {!topic.top && topic.good ? <span className="put_good">精华</span> : ""}
                        &nbsp;<span style={{fontSize:'1.5em', fontWeight:'bold'}}>{topic.title}</span>
                        <div className="topic-other">
                            <span>{topic.create_at ? "发布于 " + getDateDiff(topic.create_at) + " • " : ""}</span>作者 <span>{topic.author ? topic.author.loginname : ""}</span> • <span>{topic.visit_count}</span> 次浏览 • <span> 来自 {this.getTopicTab(topic.tab)}</span>
                        </div>
                        <div className="topic-content" dangerouslySetInnerHTML={{__html: topic.content}} />
                        <div className="topic-reply">
                            <div className="reply-count">
                                <span>{topic.reply_count}</span> 回复
                            </div>
                            <div className="reply-content">
                                <ul className="reply-items">
                                {(topic.replies || []).map((reply, index) => {
                                    return <li className="reply-item" key={index}>
                                        <a href="jjavascript:void(0)"><img width="30" height="30" src={reply.author.avatar_url} alt="" /></a>&nbsp;<a className="reply-loginname" href="#">{reply.author.loginname}</a>&nbsp;<span className="reply-floor">{index + 1}楼 • {getDateDiff(reply.create_at)}</span><br />
                                        <span dangerouslySetInnerHTML={{__html: reply.content}}></span>
                                    </li>
                                })}
                                </ul>
                            </div>
                        </div>
                    </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        topic: state.topic
    }
}
export default connect(mapStateToProps,{getTopic})(Topic);

