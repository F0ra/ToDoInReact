import * as React from 'react';
import './todoList.css';
import { TodoElement } from "../todoElement"



export const TodoList=(props)=>{
    const todos = props.todos;
    const listItems = todos.map((todo) =>{
            const className = todo.isEditing ? "EditMode" : todo.complited ? "Completed" : "NotYet"
            return(<TodoElement onBlur={()=>props.stopEditingHandler(todo.id)}
                key={todo.id.toString()}
                value={todo.value}
                id={todo.id}
                complited={todo.complited}
                isEditing={todo.isEditing}
                className={className}
                actions={props.actions}
            />)
        });
    return (
        <ul className={"todo-list-view"}>{listItems}</ul>
    );
};
