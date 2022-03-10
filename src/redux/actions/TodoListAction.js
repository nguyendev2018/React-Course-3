import { add_task, remove_task, change_theme, check_theme, update_task, newUpdate_task } from "../types/TodoList"
// syntax rxaction
export const add_taskAction = (TaskNew) => ({
    type: add_task,
    TaskNew
})
export const remove_taskAction = (remove_item) => ({
    type: remove_task,
    remove_item
})
export const change_themeAction = (valueItem) => ({
    type: change_theme,
    valueItem
})
export const check_themeAction = (check_item) => ({
    type: check_theme,
    check_item
})
export const update_taskAction = (updateItem) => ({
    type: update_task,
    updateItem
})
export const newUpdate = (name) => ({
    type: newUpdate_task,
    name
})