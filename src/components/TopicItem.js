import React from 'react'
import {Link} from 'react-router'
import './TopicItem.css'

class TopicItem extends React.Component{
    getTopicTab(tab){
        return {
            ask: '问答',
            share: '分享',
            job: '工作'
        }[tab];
    }
    render(){
        const {topic} = this.props
        return (
            <li className="topic-item">
                <Link title={topic.author.loginname} to={'user/' + topic.author.loginname}>
                    <img width="30" height="30" src={topic.author.avatar_url} alt="" />
                </Link>&nbsp;
                <span>
                    <span className="reply_count">{topic.reply_count}</span>{topic.reply_count !== undefined ? ' / ' : '' }<span className="visit_count">{topic.visit_count}</span>
                </span>&nbsp;
                {topic.top ? <span className="put_top">置顶</span> : ""}
                {!topic.top && topic.good ? <span className="put_good">精华</span> : ""}
                {!topic.top && !topic.good && topic.tab ? <span className="topic_tab">{this.getTopicTab(topic.tab)}</span> : ''}&nbsp;
                <span className="topic-title">
                    <Link title={topic.title} to={'topic/' + topic.id}>{topic.title}</Link>
                </span>
            </li>
        )
    }
}
export default TopicItem