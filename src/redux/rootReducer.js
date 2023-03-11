import { combineReducers, createStore } from "redux";
import Todo_Reducer from "./reducer/Todolist_Reducer";


const rootReducer = combineReducers({
    Todo_Reducer
})

const store = createStore(rootReducer)

export default store