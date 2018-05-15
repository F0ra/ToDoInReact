import * as React from 'react';
import './undo.css';


export const UndoButton = (props)=>{
    return(
        <button className={"undo-button btn btn-outline-secondary"} onClick={props.onClickHandler} style={props.style}>undo</button>
        );
    };