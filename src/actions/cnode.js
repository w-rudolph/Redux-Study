const API = {
    topics: 'https://cnodejs.org/api/v1/topics',  //  get
    getTopic: 'https://cnodejs.org/api/v1/topic/'  //  get,  topic/:id 
}
export const showTopics = (topics) => ({type: 'SHOW_TOPICS',topics})
export const showTopic = (topic) => ({type: 'SHOW_TOPIC',topic})
export const getAllTopics = () => (dispatch, getState) => {
    return fetch(API.topics).then(response => response.json())
    .then(json => dispatch(showTopics(json.data)))
}
export const getTopic = (id) => (dispatch, getState) => {
    return fetch(API.getTopic + id).then(response => response.json())
    .then(json => dispatch(showTopic(json.data)))
}