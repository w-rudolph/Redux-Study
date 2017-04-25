import {ADD_ONE, MINUS_ONE} from '../actions'
export function counter(state = {num: 0}, action){
    switch(action.type){
        case ADD_ONE:
            return {...state, num: state.num + 1};
        case MINUS_ONE:
            return {...state, num: state.num - 1};
        default:
            return state;
    }
}