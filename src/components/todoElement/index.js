import * as React from 'react';
import './todoElement.css';



export const TodoElement = (props) => {
    const dellTodoHandler = (e) => {
        // const element = e.target.parentElement.parentElement;
        const element = e.target.parentNode.parentNode
        element.classList.add("animate-todo-element");
        const randomOffset = Math.floor((Math.random()-0.5)*500);
        element.style.setProperty('--margin-offset', randomOffset + 'px');
        setTimeout(()=>{props.actions.dellTodo(props.id,props.complited)},700)
        // props.actions.dellTodo;
    }
        //dellTodo needs id as arg
    const markCompleteTodoHandler = props.actions.markTodo;
        //markTodo needs id as arg
    const editTodoHandler = props.actions.startEditTodo;
        //editTodoHandler needs id as arg
    const stopEditingHandler = props.actions.stopEditTodo;
        //stopEditingHandler needs event and id as args
    const handleKeyPress = (event) => {
        if(event.key === 'Enter' & props.isEditing){
            stopEditingHandler(event,props.id)
        }
    }   

    if(props.className==="EditMode"){
        return(

        <li onBlur = {(e)=>stopEditingHandler(e,props.id)}
        contentEditable
        onKeyPress = {(e)=>handleKeyPress(e)}
        className = {`list-group-item list-group-item-secondary mark-for-dell-all-button`}>
        
        {props.value}
        <div className="toDolist-button-group">
        
        <button className="btn btn-outline-success mark-dell-element-button" onClick={()=>markCompleteTodoHandler(props.id)} contentEditable={false}>mark</button>
        <button className="btn btn-outline-danger mark-dell-element-button" onClick={(e)=>dellTodoHandler(e,props.id,props.complited)} contentEditable={false}>dell</button>
        </div>   
        
        </li>
        )
    };

    return(
        
        <li onDoubleClick={()=>editTodoHandler(props.id)} 
            className={props.complited ? 
                `list-group-item 
                list-group-item-success 
                mark-for-dell-complited-button
                mark-for-dell-all-button`
                :
                `list-group-item 
                list-group-item-warning 
                mark-for-dell-all-button`} >
            {props.value}
            
            <div className="toDolist-button-group">
            <button onClick={()=>markCompleteTodoHandler(props.id)}
                className="btn btn-outline-success mark-dell-element-button">mark</button>
            <button onClick={(e)=>dellTodoHandler(e,props.id,props.complited)}
                className="btn btn-outline-danger mark-dell-element-button">dell</button>
            </div>   
        </li>
        );
    };
   

