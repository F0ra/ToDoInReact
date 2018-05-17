import * as React from 'react';
import "./viewTodoList.css"
import { TodoList } from "../todoList";
import { Pagination } from "../pagination";


export const ViewTodoList = (props)=>{
    
    const filterTodos=(todos,viewMode)=>{
        switch (viewMode){
            case "view All":
                return todos;
        
            case "view Done":
                return todos.filter((todo)=>todo.complited);
    
            case "view Undone":
                return todos.filter((todo)=>!todo.complited);
            
            default:
                return todos;
        }
    };
  
    const filteredTodos = filterTodos(props.todos, props.viewMode);
    const {curentPage,elementsPerPage} = props.pagination
    const totalPages =  (filteredTodos.length % elementsPerPage === 0) ? 
                    (Math.floor(filteredTodos.length / elementsPerPage)):
                    (Math.floor(filteredTodos.length / elementsPerPage))+1;
    let newCurentPage;
    if((curentPage > totalPages)|(curentPage===-1)){
        newCurentPage = totalPages;
        // props.paginationActions.resetPagination(newCurentPage)
    }else{newCurentPage=curentPage}        
    // const newCurentPage = curentPage <= totalPages ?
    //                     (curentPage===-1 ? totalPages:curentPage):totalPages
    //                     props.paginationActions.resetPagination(newCurentPage,0) 
    if(curentPage>totalPages){  
        // props.paginationActions.resetPagination(newCurentPage)    
    }
    const startIndex = (newCurentPage-1)*elementsPerPage 
    const viewTodos = filteredTodos.slice(startIndex,startIndex+elementsPerPage)
    // props.paginationActions.setCurentPage(2)
    // props.paginationActions.resetPagination()
        return(
            <div className="View-Todo-List">
                <TodoList 
                    listTodosIdForAnimation={props.listTodosIdForAnimation}
                    todos={viewTodos}
                    actions={props.actions}/>
                <Pagination setCurentPage={props.paginationActions.setCurentPage} 
                    curentPage={newCurentPage} 
                    totalPages={totalPages}/>
            </div>
    )};
