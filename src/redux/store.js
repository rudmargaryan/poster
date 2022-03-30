import { combineReducers, createStore } from "redux";
import { notes } from "./features/Notes";



const store = createStore(combineReducers({
    notes:notes
}))

export default store