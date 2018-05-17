import * as React from 'react';
import { toDosDict } from "./todoDIct"
import "./addTodo.css";

export class Addtodo extends React.Component {
    constructor(props){
        super(props);
        this.state={formValue:""}
        const elem = document.querySelector("body");
        elem.onkeypress = (e)=>this.handleKeyPress(e);
        
    };
    
    onChangeHandler = (e) => {
        this.setState({formValue:e.target.value})
    };

    submitTodoHandler = (e) => {
        e.preventDefault();
        if(!this.state.formValue) return;
        const timeCreatedasId = Date.now();
        const value = this.state.formValue;
        this.props.actions.addTodo(timeCreatedasId,value);
        this.props.paginationActions.resetPagination(-1);
        // this.props.multipleActions([
        //     this.props.actions.addTodo(timeCreatedasId,value),
        //     this.props.paginationActions.setCurentPage(-1)
        // ])
        this.setState({formValue:""});
        this.props.updateTodoAppStateCallback(timeCreatedasId);
    };

    handleKeyPress = (event) => {
        if(event.key === '+' ){
            this.generateTodoHandler();
        }
    };

    generateTodoHandler = () => {
        const verbsLength = Object.keys(toDosDict).length;
        const verbIndex = Math.floor(Math.random() * verbsLength);
        const verb = Object.keys(toDosDict)[verbIndex];
        const targetsLength = toDosDict[verb].length;
        const targetIndex = Math.floor(Math.random() * targetsLength);
        const target = toDosDict[verb][targetIndex];
        const generatedTodo = verb + " " + target;
        const timeCreatedasId = Date.now();
        this.props.actions.addTodo(timeCreatedasId,generatedTodo);
        this.props.paginationActions.resetPagination(-1);
        this.setState({formValue:""});
        this.props.updateTodoAppStateCallback(timeCreatedasId);
    };

    render(){
        return(
        <form className={"input-todo-form"} onSubmit={this.submitTodoHandler}>
            <div className="input-group">
                <input className={"input-todo-fild form-control"} 
                    aria-label="Text input with segmented dropdown button"
                    type={"text"} onChange={this.onChangeHandler} 
                    value={this.state.formValue}
                    
                    placeholder="type down your task..."/>
                    
                <div className="input-group-append tooltipz">   
                    <button className={"btn btn-default add-todo-button"}
                    onDoubleClick={this.generateTodoHandler}
                    
                    type="submit">addTodo</button>
                    <span className="tooltiptext">Double click me</span>
                </div>
            </div>
        </form>
    )};
  };

 