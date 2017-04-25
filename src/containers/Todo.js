import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {TODO_ADD, TODO_REMOVE,TODO_COMPLETE, TODO_SHOW_ALL,TODO_SHOW_ALL_TEXT, TODO_SHOW_COMPLETED,TODO_SHOW_COMPLETED_TEXT, TODO_SHOW_UNCOMPLETED,TODO_SHOW_UNCOMPLETED_TEXT, TODO_VISIBILITY_FILTER, addOne} from '../actions'
import './Todo.css'
class App extends React.Component{ 
    onKeydown(e){
        const {dispatch} = this.props;
        var keyCode = e.which;
        var value = e.target.value;
        if(keyCode === 13){
            if(value){
                dispatch({type:TODO_ADD, text:value});
                e.target.value = '';              
            }
        }
    }
    removeOne(id){
        const {dispatch} = this.props;
        dispatch({type:TODO_REMOVE, id:id});
    }
    finishOne(id){
        const {dispatch} = this.props;
        dispatch({type:TODO_COMPLETE, id:id});
    }
    getCompleted(){
        const {todos} = this.props;
        return todos.filter(todo=>{
                    return todo.completed;
               }).length;
    }
    getUncompleted(){
        const {todos} = this.props;
        return todos.filter(todo=>{  
                    return todo.completed === false;
               }).length;
    }
    todoFilterTxt(filter){
        switch(filter){
            case TODO_SHOW_ALL:
                return TODO_SHOW_ALL_TEXT;
            case TODO_SHOW_COMPLETED:
                return TODO_SHOW_COMPLETED_TEXT;
            case TODO_SHOW_UNCOMPLETED:
                return TODO_SHOW_UNCOMPLETED_TEXT;
        }
    }
    doFilter(filter){
        const {dispatch} = this.props;
        dispatch({type:TODO_VISIBILITY_FILTER, filter:filter});       
    }
    renderFilter(filter){
        return [TODO_SHOW_ALL, TODO_SHOW_COMPLETED, TODO_SHOW_UNCOMPLETED].map((item, index) => {
            if(item === filter) return <span key={index}>&nbsp;{this.todoFilterTxt(item)}&nbsp;</span>
            return <span key={index}>&nbsp;<a onClick={this.doFilter.bind(this,item)} href="javascript:void(0)">{this.todoFilterTxt(item)}</a>&nbsp;</span>
        })
    }
    renderFooter(filter){

        switch(filter){
            case TODO_SHOW_ALL:
                return (
                    <span>
                    {TODO_SHOW_COMPLETED_TEXT}: {this.getCompleted()} <br />
                    {TODO_SHOW_UNCOMPLETED_TEXT}: {this.getUncompleted()}
                    </span>
                );
            case TODO_SHOW_COMPLETED:
                return (
                    <span>
                    {TODO_SHOW_COMPLETED_TEXT}: {this.getCompleted()}
                    </span>
                );
            case TODO_SHOW_UNCOMPLETED:
                return (
                    <span>
                    {TODO_SHOW_UNCOMPLETED_TEXT}: {this.getUncompleted()}
                    </span>
                );
        }
    }
    render(){
        const {todos, todoFilter} = this.props;
        return <div>
            <input type="text" onKeyDown={this.onKeydown.bind(this)} />
            <ul className="todo-items">
            {todos.map((todo, index)=>{
                return <li key={index} className="todo-item">
                <span className={todo.completed ? 'todo_completed' : ''}>{todo.text}</span>
                &nbsp;<button onClick={this.removeOne.bind(this, todo.id)}>x</button>
                &nbsp;<button onClick={this.finishOne.bind(this, todo.id)}>{!todo.completed ? '完成' : '取消完成'}</button>
                </li> 
            })}
            </ul>
            <div className="footer">
            {this.renderFooter(todoFilter)}    
            </div>
            <div className="filter-todo">
            <hr />
            {this.renderFilter(todoFilter)}
            </div>
        </div>
    }
}
const getFilterSate = (todos, filter) => {
    switch(filter){
        case TODO_SHOW_ALL:
            return todos;
        case TODO_SHOW_COMPLETED:
            return todos.filter(todo => todo.completed === true);
        case TODO_SHOW_UNCOMPLETED:
            return todos.filter(todo => todo.completed === false);
        default:
            return todos;
    }
}
const mapStateToProps = (state, ownProps) => {
    return {todos: getFilterSate(state.todos, state.visibilityFilter), todoFilter: state.visibilityFilter, dispatch:state.dispatch}
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {actions: bindActionCreators({addOne}, dispatch)}
}
export default connect(mapStateToProps/*, mapDispatchToProps*/)(App);