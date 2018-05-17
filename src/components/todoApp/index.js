import * as React from 'react';
import './todo.css';
import * as todoActions from "../../actions/todoActions";
import * as timeTravelActions from "../../actions/undoRedoActions";
import * as viewModeActions from "../../actions/viewModeActions";
import * as paginationActions from "../../actions/paginationActions";
import * as defaultActions from "../../actions/defaultActions";
import { connect } from "react-redux";
import { Addtodo } from "../addTodo";
import { DellMarkGroup } from "../dellMarkButtonGroup";
import { ViewTodoList } from "../viewTodoList";
import { UndoRedoGroup } from "../undoRedoGroup";
import { ViewModeGroup } from "../viewModeGroup";
import { Title } from "../title";
import { StateLoadInfo } from "../stateLoadInfo";




class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.state={todosStateLoaded:false,
              listTodosIdForAnimation:[]}
  }

  componentDidMount() {
    this.props.defaultActions.loadState(
      ()=>{
        this.setState({todosStateLoaded:true})}
    );
    setTimeout(()=>{this.setState({todosStateLoaded:false})},4100);//show info componet for 4 sec then unmount it
  };

  updateTodoAppStateCallback=(id,playAddTodoAnimation=true)=>{//method for animation add todo
    let newIdList = [...this.state.listTodosIdForAnimation];
    if(playAddTodoAnimation){
      newIdList.push(id);
      setTimeout(()=>{this.updateTodoAppStateCallback(id,false)},800);
      const randomOffset = Math.floor((Math.random()-0.5)*100);//get random value for css animation
      document.querySelector("#root").style.setProperty('--margin-offset', randomOffset + 'px');//pass randome value to css animation
      }else{
          newIdList = [...this.state.listTodosIdForAnimation
          .filter((todosId)=>{
          return todosId!==id})]
      }
         this.setState({listTodosIdForAnimation:newIdList})
         
  }

  render() {
    const StateInfo = this.state.todosStateLoaded ? <StateLoadInfo/> : null
  return (
      <div className="Todo-app">
        {StateInfo}
        <UndoRedoGroup actions={this.props.timeTravelActions} canUndo={this.props.timeTravel.canUndo} canRedo={this.props.timeTravel.canRedo}/>
        <Title stats={this.props.todos.todosStat}/>
        <div>
          <ViewModeGroup actions={this.props.viewModeActions} viewMode={this.props.viewMode}/>
          <DellMarkGroup actions={this.props.todoActions} />
        </div>
        <Addtodo actions={this.props.todoActions}
          paginationActions={this.props.paginationActions}
          multipleActions={this.props.timeTravelActions.multipleActions}
          updateTodoAppStateCallback = {this.updateTodoAppStateCallback}/>
        <ViewTodoList 
          todos={this.props.todos.todosList}
          viewMode={this.props.viewMode}
          actions={this.props.todoActions}
          pagination={this.props.pagination}
          paginationActions={this.props.paginationActions}
          listTodosIdForAnimation={this.state.listTodosIdForAnimation}/>
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
      },
      defaultActions:{
        loadState : (cb)=> dispatch(defaultActions.loadState(cb))
      }
    }
  }

export default connect((state)=> {return {...state.present,timeTravel:state.timeTravel}},
mapDispatchToProps )(TodoApp);
