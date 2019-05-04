import React from 'react';
import TodoList from './TodoList';
 import PropTypes from 'prop-types';


export class Todo extends React.Component{
    render(){
        return this.props.todos.map((todo)=>(
           <TodoList/>
        ))
    }
}
Todo.propTypes={
    todos:PropTypes.array.isRequired
}


export default Todo;


