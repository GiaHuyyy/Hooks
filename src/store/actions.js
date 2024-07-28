import {
    SET_TODO_INPUT,
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    SAVE_TODO,
    CLEAR_ALL_TODO,
} from "./constants";

export const setTodoInput = (payload) => ({
    type: SET_TODO_INPUT,
    payload,
});

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload,
});

export const deleteTodo = (index) => ({
    type: DELETE_TODO,
    index,
});

export const editTodo = (index) => ({
    type: EDIT_TODO,
    index,
});

export const saveTodo = (active) => ({
    type: SAVE_TODO,
    active,
});

export const clearAllTodo = () => ({
    type: CLEAR_ALL_TODO,
});
