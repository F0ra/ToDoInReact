export const addTodo = (id,value)=>{
    return {
        type:"ADD_TODO",
        payload:{id,value}
    }
};

export const dellTodo = (id,isComplited)=>{
    return {
        type:"DELL_TODO",
        payload:{id,isComplited}
    }
}; 

export const dellAllDoneTodos = ()=>{
    return {
        type:"DELL_ALL_DONE"       
    }
};

export const dellAllTodos = ()=>{
    return {
        type:"DELL_ALL_TODOS"       
    }
};

export const markAllTodos = ()=>{
    return {
        type:"MARK_ALL_TODOS"       
    }
};

export const unMarkAllTodos = ()=>{
    return {
        type:"UNMARK_ALL_TODOS"       
    }
};

export const markTodo = (id)=>{
    return {
        type:"MARK_TODO",
        payload:{id}
    }
};

export const startEditTodo = (id)=>{
    return {
        type:"START_EDIT_TODO",
        payload:{id}
    }
};

export const stopEditTodo = (event,id)=>{
    return {
        type:"STOP_EDIT_TODO",
        payload:{value:event.target.innerText,id}
        //using slice cose mark and dell return as part of innerText
    }
};
