import * as React from 'react';
import "./dellMarkButtonGroup.css"
import { DellAllButton } from '../dellMarkButtonGroup/dellAllButton';
import { MarkAllButton } from '../dellMarkButtonGroup/markAllButton';
import { DellAllDoneButton } from '../dellMarkButtonGroup/dellAllDoneButton';


export class DellMarkGroup extends React.Component {
    
    render(){
        return(
        <div className="dell-mark-group btn-group" role="group" aria-label="Button group with nested dropdown">
            <MarkAllButton markAllTodos={this.props.actions.markAllTodos} unMarkAllTodos={this.props.actions.unMarkAllTodos}/>
            <DellAllDoneButton onClickHandler={this.props.actions.dellAllDoneTodos}/>   
            <DellAllButton onClickHandler={this.props.actions.dellAllTodos}/>   
        </div>
    )};
  };
