import {TODO_ADD, TODO_REMOVE, TODO_COMPLETE,TODO_VISIBILITY_FILTER,TODO_SHOW_ALL} from '../actions'
export function todos(state = [{text:'Todo', completed: false, id: 0}], action){
    switch(action.type){
        case TODO_ADD:
            return [{text: action.text, id: state.length, completed:false},...state];
        case TODO_REMOVE:
            return state.filter(todo => todo.id !== action.id);
        case TODO_COMPLETE:
            let newState = JSON.parse(JSON.stringify(state));
            newState.forEach(todo => {
                if(todo.id === action.id) todo.completed = !todo.completed
            });
            return newState;
        default:
            return state;
    }
}
export function visibilityFilter(state = TODO_SHOW_ALL, action){
  switch (action.type) {
    case TODO_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}