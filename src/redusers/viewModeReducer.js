
export const viewModeReducer = (state="view All", action) => {
    switch (action.type){
        
        case "SET_VIEW_ALL":{
            state = "view All"
            break;
        }

        case "SET_VIEW_DONE":{
            state = "view Done"
            break;
        }

        case "SET_VIEW_UNDONE":{
            state = "view Undone"
            break;
        }
        default:
    }
    return state ; 
};