//COUNTER
export const ADD_ONE = 'ADD_ONE'
export const MINUS_ONE = 'MINUS_ONE'

//TODO
export const TODO_ADD = 'TODO.ADD'
export const TODO_REMOVE = 'TODO.REMOVE'
export const TODO_COMPLETE = 'TODO.COMPLETE'
export const TODO_SHOW_ALL = 'TODO.SHOW_ALL';
export const TODO_SHOW_COMPLETED = 'TODO.SHOW_COMPLETED';
export const TODO_SHOW_UNCOMPLETED = 'TODO.SHOW_UNCOMPLETED';
export const TODO_VISIBILITY_FILTER = 'TODO.VISIBILITY_FILTER';
export const TODO_SHOW_ALL_TEXT = '所有';
export const TODO_SHOW_COMPLETED_TEXT = '已完成';
export const TODO_SHOW_UNCOMPLETED_TEXT = '未完成';

export const addOne = (text) => ({type:TODO_ADD, text});