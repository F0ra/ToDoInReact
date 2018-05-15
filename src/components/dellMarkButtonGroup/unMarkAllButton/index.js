import * as React from 'react';
import './unMarkAllButton.css';


export const UnMarkAllButton = (props)=>{
    return(
        <button onClick={props.onClickHandler}>unmark all</button>
        );
    };