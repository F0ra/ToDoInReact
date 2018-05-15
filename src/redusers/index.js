import { toDosReducer } from "./toDosReducer";
import { viewModeReducer } from "./viewModeReducer";
import { paginationReducer } from "./paginationReducer";
import { timeTravel } from "./timeTravelMainReducer";
import { combineReducers } from "redux";

//state:{
//    past:[],
//    presenrt:{
//          viewMode:"View All",
//          todos:[
//              {id:324324, complited:false, value:"create react todo list", isEditing:false},
//              {id:234324, complited:false, value:"without redux", isEditing:false},
//              ],
//          formValue:""
//          },
//     future:[]
// }

export const redusers = combineReducers({
    todos:toDosReducer,
    viewMode:viewModeReducer,
    pagination:paginationReducer,
});

export const mainReducer = timeTravel(redusers);