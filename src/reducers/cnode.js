const initialState = [];
export function topics(state = initialState, action){
    switch(action.type){
        case 'SHOW_TOPICS':
            return action.topics
        default:
            return state;
    }
}
export function topic(state = {}, action){
    switch(action.type){
        case 'SHOW_TOPIC':
            return action.topic
        default:
            return state;
    }
}
export function user(state = {recent_replies:[],recent_topics:[]}, action){
    switch(action.type){
        case 'SHOW_USER':
            return action.user ? action.user : state
        default:
            return state;
    }
}