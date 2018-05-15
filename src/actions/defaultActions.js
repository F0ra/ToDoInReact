export const loadState = (cb)=>{
    return {
        type:"LOAD_STATE_FROM_LOCALSTORAGE",
        payload:{cb}     
    }
};


