import * as React from 'react';
import './markAllButton.css';


export class MarkAllButton extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
      }

     clickHandler = ()=>{
        let markAll=false
        return ()=>{
            markAll = ! markAll
            
            if(markAll){
                
                return this.props.markAllTodos()

            }else{
                return this.props.unMarkAllTodos()
            }
        }
    }
    
    render(){
    return(
        <button type="button" className="btn btn-outline-success" onClick={this.clickHandler()}>mark</button>
        );
    };
    }
