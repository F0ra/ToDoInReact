import * as React from 'react';
import './dellAllButton.css';


export const DellAllButton = (props)=>{
    const dellAllHandler = ()=> {
        const elements = document.querySelectorAll(".mark-for-dell-all-button");
        elements.forEach(element => {
            const randomOffset = Math.floor((Math.random()-0.5)*500);
            element.style.setProperty('--margin-offset', randomOffset + 'px');
            element.classList.add("animate-todo-element");
        });
        setTimeout(()=>{props.onClickHandler()},700);
    };

    return(
        <button type="button"
         className="btn btn-danger"
          onClick={dellAllHandler}>dell all</button>
        );
    };