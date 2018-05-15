import * as React from 'react';
import './redo.css';


export const RedoButton = (props)=>{
    return(
        <button className={"redo-button btn btn-outline-secondary"} onClick={props.onClickHandler} style={props.style}>redo</button>
        );
    };