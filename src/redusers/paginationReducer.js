
export const paginationReducer = (state={curentPage:1,
                                        elementsPerPage:5
                                        }, action) => {
    
    switch (action.type){
        case "RESET_PAGINATION":{
            // state={...state,
            //     curentPage:action.payload.curentPage,
            //     totalPages:action.payload.totalPages}
            state.curentPage = action.payload.curentPage;
            // state.totalPages = action.payload.totalPages;
            break;
        }

        case "SET_CURENT_PAGE":{
            state={...state,curentPage:action.payload.curentPage}    
            break;
        }

        default:
    }
    return state ; 
};