import * as React from 'react';
import './todoElement.css';



export const TodoElement = (props) => {
    const dellTodoHandler = (e) => {
        e.stopPropagation();
        let element = e.target.parentNode.parentNode;
        if(element.tagName!=="LI") element = element.parentNode;
        
        element.classList.add("animate-todo-element");
        const randomOffset = Math.floor((Math.random()-0.5)*500);//get random value for css animation
        element.style.setProperty('--margin-offset', randomOffset + 'px');//pass randome value to css animation
        setTimeout(()=>{props.actions.dellTodo(props.id,props.complited)},700);
    }

    const markCompleteTodoHandler = props.actions.markTodo;
    const editTodoHandler = props.actions.startEditTodo;
    const stopEditingHandler = props.actions.stopEditTodo;

    const handleKeyPress = (event) => {
        if(event.key === 'Enter' & props.isEditing){
            stopEditingHandler(event,props.id)
        };
    };   

    if(props.isEditing){
        return(

        <li onBlur = {(e)=>stopEditingHandler(e,props.id)}
        contentEditable
        onKeyPress = {(e)=>handleKeyPress(e)}
        className = {`list-group-item list-group-item-secondary mark-for-dell-all-button`}>
        
        {props.value}

        <div className="toDolist-button-group" contentEditable={false}>
            <button onClick={()=>markCompleteTodoHandler(props.id)}
                className="btn btn-success mark-dell-element-button">
                <i className="fa fa-check-square-o icon-from-mark-dell-button" >
                </i></button>
            <button onClick={(e)=>dellTodoHandler(e,props.id,props.complited)}
                className="btn btn-danger mark-dell-element-button">
                <i  className="fa fa-trash-o icon-from-mark-dell-button" >
                </i></button>
            </div>   
        </li>
        )
    };
        let className="list-group-item mark-for-dell-all-button "
        if(props.playAddTodoAnimation) className +=" play-add-todo-animation"
    return(
        
        <li onDoubleClick={()=>editTodoHandler(props.id)} 
            className={props.complited ? 
                className+=` list-group-item-success 
                mark-for-dell-complited-button`
                :
                className+=` list-group-item-warning `} >
            {props.value}
            
            <div className="toDolist-button-group">
            <button onClick={()=>markCompleteTodoHandler(props.id)}
                className="btn btn-success mark-dell-element-button">
                <i className="fa fa-check-square-o icon-from-mark-dell-button" >
                </i></button>
            <button onClick={(e)=>dellTodoHandler(e,props.id,props.complited)}
                className="btn btn-danger mark-dell-element-button">
                <i  className="fa fa-trash-o icon-from-mark-dell-button" >
                </i></button>
            </div>   
        </li>
        );
    };
   

