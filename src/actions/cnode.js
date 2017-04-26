const API = {
    topics: 'https://cnodejs.org/api/v1/topics',   //  get
    getTopic: 'https://cnodejs.org/api/v1/topic/', //  get,  topic/:id 
    getUser: 'https://cnodejs.org/api/v1/user/'    //  get,  topic/:loginname
}
export const showTopics = (topics) => ({type: 'SHOW_TOPICS',topics})
export const showTopic = (topic) => ({type: 'SHOW_TOPIC',topic})
export const userInfo = (user) => ({type: 'SHOW_USER',user})
export const getAllTopics = () => (dispatch, getState) => {
    return fetch(API.topics).then(response => response.json())
    .then(json => dispatch(showTopics(json.data)))
}
export const getTopic = (id) => (dispatch, getState) => {
    return fetch(API.getTopic + id).then(response => response.json())
    .then(json => dispatch(showTopic(json.data)))
}
export const getUser = loginname  => (dispatch, getState) =>{
    return fetch(API.getUser + loginname).then(response => response.json())
    .then(json => dispatch(userInfo(json.data)))
}