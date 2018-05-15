export const resetPagination = (curentPage,totalPages)=>{
    return {
        type:"RESET_PAGINATION",
        payload:{curentPage,totalPages}
    }
};

export const setCurentPage = (curentPage)=>{
    return {
        type:"SET_CURENT_PAGE",
        payload:{curentPage}
    }
};

