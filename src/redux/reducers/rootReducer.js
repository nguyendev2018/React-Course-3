import { combineReducers } from "redux";
import FaceBookReducer from "./FaceBookReducer";
import TodoListReducer from "./TodoListReducer";

export const rootReducer = combineReducers({
    TodoListReducer,
    FaceBookReducer
})