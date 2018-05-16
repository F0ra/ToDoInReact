import * as React from 'react';
import './stateLoadInfo.css';


export const StateLoadInfo = (props)=>{
    return(
        <React.Fragment>
        <div className="state-load-info-background">
        
        </div>
        <div className="alert alert-success state-load-info" role="alert">
            <h4 className="alert-heading">Good news!</h4>
            <p>Todo`s state has been loaded from localStorage</p>
        </div>
        </React.Fragment>
    );
};