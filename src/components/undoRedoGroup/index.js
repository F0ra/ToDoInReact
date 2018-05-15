import * as React from 'react';
import "./undoRedoGroup.css"
import { RedoButton } from '../undoRedoGroup/redo';
import { UndoButton } from '../undoRedoGroup/undo';

export const UndoRedoGroup = (props)=>{
    
    return(
        <div>
            {/* {props.canUndo && <UndoButton onClickHandler={props.actions.undo}/>} */}
            {/* {props.canRedo && <RedoButton onClickHandler={props.actions.redo}/>} */}
            <UndoButton onClickHandler={props.actions.undo} style={props.canUndo ? null: { visibility: 'hidden' }}/>
            <RedoButton onClickHandler={props.actions.redo} style={props.canRedo ? null: { visibility: 'hidden' }}/>


        </div>
    )};
