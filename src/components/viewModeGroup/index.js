import * as React from 'react';
import "./viewModeGroup.css"


export const ViewModeGroup = (props)=>{
    return(
        <div className="dropdown view-mode-group">
            <button className="btn btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Show...
            </button>
            <div className ="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a  className={"dropdown-item view view-mode-options" + (props.viewMode==="view All" ? " active" : " ")}  onClick={props.actions.viewAll} >show All</a>
                <a  className={"dropdown-item view view-mode-options" + (props.viewMode==="view Done" ? " active" : " ")}  onClick={props.actions.viewDone}>show Done</a>
                <a  className={"dropdown-item view view-mode-options" + (props.viewMode==="view Undone" ? " active" : " ")}  onClick={props.actions.viewUndone}>show to be Done</a>
            </div>
        </div>
        );
    };