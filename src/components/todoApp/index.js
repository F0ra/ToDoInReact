import * as React from 'react';
import './todo.css';
import * as todoActions from "../../actions/todoActions";
import * as timeTravelActions from "../../actions/undoRedoActions";
import * as viewModeActions from "../../actions/viewModeActions";
import * as paginationActions from "../../actions/paginationActions";
import { connect } from "react-redux";
import { Addtodo } from "../addTodo";
import { DellMarkGroup } from "../dellMarkButtonGroup";
import { ViewTodoList } from "../viewTodoList";
import { UndoRedoGroup } from "../undoRedoGroup";
import { ViewModeGroup } from "../viewModeGroup";
import { Title } from "../title";



class TodoApp extends React.Component {
  // componentWillMount() {
  //   // fires immediately before the initial render
  //   const firstAction = this.props.paginationActions.setCurentPage(2)
  //   const secondAction = this.props.paginationActions.setCurentPage(11)
    
  //   this.props.timeTravelActions.multipleActions([firstAction,secondAction])
  //   }
  render() {
  return (
      <div className="Todo-app">
        <UndoRedoGroup actions={this.props.timeTravelActions} canUndo={this.props.timeTravel.canUndo} canRedo={this.props.timeTravel.canRedo}/>
        <Title stats={this.props.todos.todosStat}/>
      <div>
      
        <ViewModeGroup actions={this.props.viewModeActions} viewMode={this.props.viewMode}/>
        <DellMarkGroup actions={this.props.todoActions} />
      </div>
        <Addtodo actions={this.props.todoActions}
          paginationActions={this.props.paginationActions}
          multipleActions={this.props.timeTravelActions.multipleActions}/>
        <ViewTodoList 
          todos={this.props.todos.todosList}
          viewMode={this.props.viewMode}
          actions={this.props.todoActions}
          pagination={this.props.pagination}
          paginationActions={this.props.paginationActions}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
      todoActions:{
        addTodo : (id,val) => dispatch(todoActions.addTodo(id,val)),
        dellTodo : (id,isComplited) => dispatch(todoActions.dellTodo(id,isComplited)),
        dellAllDoneTodos : () => dispatch(todoActions.dellAllDoneTodos()),
        dellAllTodos : () => dispatch(todoActions.dellAllTodos()), 
        markAllTodos : () => dispatch(todoActions.markAllTodos()),
        unMarkAllTodos : () => dispatch(todoActions.unMarkAllTodos()),
        markTodo : (id) => dispatch(todoActions.markTodo(id)),
        startEditTodo : (id) => dispatch(todoActions.startEditTodo(id)),
        stopEditTodo : (e,id) => dispatch(todoActions.stopEditTodo(e,id))
      },
      timeTravelActions:{
        undo : ()=> dispatch(timeTravelActions.undo()),
        redo : ()=> dispatch(timeTravelActions.redo()),  
        multipleActions : (listActions)=> dispatch(timeTravelActions.multipleActions(listActions)),   
      },
      viewModeActions:{
        viewAll : ()=> dispatch(viewModeActions.viewAll()),
        viewDone : ()=> dispatch(viewModeActions.viewDone()), 
        viewUndone : ()=> dispatch(viewModeActions.viewUndone()),         
      },
      paginationActions:{
        resetPagination : (curentPage,totalPages)=> dispatch(paginationActions.resetPagination(curentPage,totalPages)),
        setCurentPage : (curentPage)=> dispatch(paginationActions.setCurentPage(curentPage))
      }
    }
  }

export default connect((state)=> {return {...state.present,timeTravel:state.timeTravel}},
mapDispatchToProps )(TodoApp);
