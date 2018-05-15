import * as React from 'react';
import "./dellAllDoneButton.css"


export const DellAllDoneButton = (props)=>{
    const dellAllCompliteHandler = ()=> {
        const elements = document.querySelectorAll(".mark-for-dell-complited-button");
        elements.forEach(element => {
            const randomOffset = Math.floor((Math.random()-0.5)*500);
            element.style.setProperty('--margin-offset', randomOffset + 'px');
            element.classList.add("animate-todo-element");
        });
        setTimeout(()=>{props.onClickHandler()},700);
    };

    return(
        <button type="button"
         className="btn btn-outline-danger dell-all-button"
          onClick={dellAllCompliteHandler}>dell done</button>
        );
    };