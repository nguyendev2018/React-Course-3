import { arrTheme } from "../../Themes/ThemeManager";
import { TodoListPrimaryTheme } from "../../Themes/TodoListPrimaryTheme"
import { add_task, change_theme, remove_task, check_theme, update_task, newUpdate_task } from "../types/TodoList"

const initialState = {
    themeTodoList: TodoListPrimaryTheme,
    taskList: [
        { id: 1, name: "task1", done: true },
        { id: 2, name: "task2", done: false },
        { id: 3, name: "task3", done: false },
        { id: 4, name: "task4", done: true },
    ],
    taskEdit:
        { id: 1, name: "task1", done: true },

}

export default (state = initialState, action) => {
    switch (action.type) {
        case add_task: {
            let listTodo = [...state.taskList];
            let update = action.TaskNew;
            listTodo.push(update)
            state.taskList = listTodo;
            return { ...state }
        };
            break;
        case remove_task: {
            let listTodo = [...state.taskList];
            let index = listTodo.findIndex(item => item.id === action.remove_item)
            if (index !== -1) {
                listTodo.splice(index, 1)
            }
            state.taskList = listTodo;
            return { ...state }
        }; break
        case update_task: {
            return { ...state, taskEdit: action.updateItem }
        }
            break;
        case change_theme: {
            let listTheme = arrTheme.find(item => item.id == action.valueItem);
            if (listTheme) {
                state.themeTodoList = { ...listTheme.theme }
            }
            return { ...state }
        }
            ;
            break;
        case check_theme: {
            let listTodo = [...state.taskList];
            console.log(listTodo);
            let index = listTodo.findIndex(item => item.id == action.check_item)
            if (index !== -1) {
                listTodo[index].done = true;
            }
            state.taskList = listTodo;
            return { ...state }
        }; break;
        case newUpdate_task: {
            // chỉnh sửa lại taskname của taskEdit
            state.taskEdit = { ...state.taskEdit, name: action.name };
            // tìm trong taskList cập nhật lại taskEdit người dùng update
            let taskListUpdate = [...state.taskList];

            let index = taskListUpdate.findIndex(task => task.id == state.taskEdit.id);
            if (index !== -1) {
                taskListUpdate[index] = state.taskEdit;
            }
            state.taskList = taskListUpdate
            return { ...state }
        }
        default:
            return { ...state }
    }
}
