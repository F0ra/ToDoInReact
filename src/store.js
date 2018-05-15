import { applyMiddleware,createStore } from "redux";
import logger from "redux-logger";
import ReduxThunk from 'redux-thunk';
import { mainReducer } from "./redusers";



const middleware = applyMiddleware(ReduxThunk,logger)

export const store = createStore(mainReducer,middleware);


// const logger = (store)=>(next)=>(action)=>{
//     console.log("action fired",action)
//     next(action)
// }