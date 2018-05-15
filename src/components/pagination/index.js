import * as React from 'react';
import "./pagination.css"



export const Pagination = (props)=>{

    let rows = [];
    if(props.totalPages>1){
        for (let i = 1; i <= props.totalPages; i++) {
        rows.push(<li key={i} className={"page-item" + (i === props.curentPage ? " active" : "")}>
                    <a className="page-link" onClick={()=>{props.setCurentPage(i)}}>{i}</a>
                </li>);
        }
    }

    return(
        <nav aria-label="...">
        <ul className = "pagination justify-content-center">
            {rows}
        </ul>
        </nav>
        
        );
    };
    




