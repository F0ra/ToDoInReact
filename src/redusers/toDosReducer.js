
export const toDosReducer = (state={todosList:[],
                                todosStat:{
                                    totalTodos:0,
                                    doneTodos:0
                                }}, action) => {
    switch (action.type){
        case "ADD_TODO":
            state = {...state};
            state.todosList = [...state.todosList,
                {id:action.payload.id,  complited:false, value:action.payload.value, isEditing:false}];
            state.todosStat = {...state.todosStat};
            state.todosStat.totalTodos += 1;
            break;
            
        case "DELL_TODO":
            state = {...state};
            state.todosStat = {...state.todosStat};
            state.todosStat.totalTodos -= 1;
            action.payload.isComplited && (state.todosStat.doneTodos -= 1);
            state.todosList = state.todosList.filter((todo)=>{return action.payload.id!==todo.id})
            break;

        case "DELL_ALL_TODOS":
            state = {...state};
            state.todosList = [];
            state.todosStat = {...state.todosStat};
            state.todosStat.totalTodos = 0;
            state.todosStat.doneTodos = 0;
            break;

        case "DELL_ALL_DONE":
            state = {...state};
            state.todosStat = {...state.todosStat};
            state.todosStat.totalTodos -= state.todosStat.doneTodos;
            state.todosStat.doneTodos = 0;
            state.todosList = state.todosList.filter((todo)=>{
                return !todo.complited
                });
        break;

        case "MARK_TODO":
            state = {...state};
            state.todosStat = {...state.todosStat};
            state.todosList = state.todosList.map((todo)=>{
            todo = {...todo};
                if(todo.id === action.payload.id){
                    if(todo.complited){
                        state.todosStat.doneTodos -= 1;
                    }else{
                        state.todosStat.doneTodos += 1;
                    }
                    todo.complited =! todo.complited
                    }
                return todo
                })
            break;
        
        case "MARK_ALL_TODOS":
            state = {...state};
            state.todosStat = {...state.todosStat};
            state.todosStat.doneTodos = state.todosStat.totalTodos;
            state.todosList = state.todosList.map((todo)=>{
                todo = {...todo};
                    todo.complited = true;
                    return todo;
                    });
            break;

        case "UNMARK_ALL_TODOS":
            state = {...state};
            state.todosStat = {...state.todosStat};
            state.todosStat.doneTodos = 0;
            state.todosList = state.todosList.map((todo)=>{
                todo = {...todo};
                    todo.complited = false;
                    return todo;
                    })
        break;

        case "START_EDIT_TODO":
            state = {...state};
            state.todosList = state.todosList.map((todo)=>{
                todo = {...todo};
                if(todo.id === action.payload.id){
                    todo.isEditing = true;
                }
                return todo});
            break;

        case "STOP_EDIT_TODO":
            state = {...state};
            state.todosList = state.todosList.map((todo)=>{
                todo = {...todo};
                if(todo.id === action.payload.id){
                    todo.isEditing = false;
                    todo.value = action.payload.value;
                }
                return todo});
            break;

        default:
    }
    return state ; 
};

