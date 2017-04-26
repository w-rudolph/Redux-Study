import React from 'react'
import {connect} from 'react-redux'
import {getUser} from '../actions/cnode.js'
import {Link} from 'react-router'
import TopicItem from '../components/TopicItem'

class User extends React.Component {
    
    constructor(props){
        super(props);
        const {id} = this.props.params;
        const {dispatch, getUser} = this.props;
        dispatch(getUser(id));
    }
    render(){
        const user = this.props.user;
        console.log(user);
        return (

            <div id="user-profiles">
                <div className="profile-header">
                    <img src={user.avatar_url} alt="" width="30" height="30" />&nbsp;
                    <span>{user.loginname}</span>
                    <div>{user.score} 积分</div>
                    <div>github: <Link target="_blank" to={'https://github.com/' + user.githubUsername}>{user.githubUsername}</Link></div>
                </div>
                <div className="recent_replies">
                    <h3>最近创建的话题</h3>
                    <ul>
                        {user.recent_replies.map((topic, index) => {
                            return (
                                <TopicItem key={index} topic={topic}  /> 
                            )
                        })}
                    </ul>
                </div>
                <div className="recent_topics">
                    <h3>最近参与的话题</h3>
                    <ul>
                        {user.recent_topics.map((topic, index) => {
                            return (
                                <TopicItem key={index} topic={topic}  /> 
                            )
                        })}
                    </ul>
                </div>
            </div>         
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user,
        getUser    
    }
}
export default connect(mapStateToProps)(User);

