export const undo = ()=>{
    return {
        type:"UNDO"       
    }
};

export const redo = ()=>{
    return {
        type:"REDO"       
    }
};

export const multipleActions = (listActions)=>{
    return {
        type:"MULTIPLE_ACTIONS",
        payload:{listActions}     
    }
};
