import * as React from 'react';
import './title.css';


export const Title = (props)=>{
    if(props.stats.totalTodos){
        return(
            <div className="todos-title">
                <h4>To-Dos total: {props.stats.totalTodos}, done: {props.stats.doneTodos}</h4>
            </div> 
       )
    }
    return(
        <div className="todos-title">
            <h4>Todo list... </h4>
        </div> 
        );
    };