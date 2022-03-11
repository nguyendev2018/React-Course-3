import { combineReducers } from "redux";
import FaceBookReducer from "./FaceBookReducer";
import TodoListReducer from "./TodoListReducer";
import BuggerReducer from "./BuggerReducer";
export const rootReducer = combineReducers({
    TodoListReducer,
    FaceBookReducer,
    BuggerReducer
})