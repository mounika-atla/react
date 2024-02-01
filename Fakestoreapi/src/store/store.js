import { combineReducers,createStore } from "redux";
import productsreducer from "./productsreducer"
var store=createStore(combineReducers({todolist:todoreducer}));
export default store