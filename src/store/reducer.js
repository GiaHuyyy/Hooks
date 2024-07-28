import {
    SET_TODO_INPUT,
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    SAVE_TODO,
    CLEAR_ALL_TODO,
} from "./constants";

const initState = {
    todos: [],
    todoInput: "",
};

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload,
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case DELETE_TODO:
            const newTodos = [...state.todos]

            newTodos.splice(action.index, 1)
            return {
                ...state,
                todos: newTodos
            };
        case EDIT_TODO:
            return {
                ...state,
                todoInput: state.todos[action.index],
            };
        case SAVE_TODO:
            state.todos[action.active] = state.todoInput;
            return state;
        case CLEAR_ALL_TODO:
            state.todos = [];
            return state;
        default:
            throw new Error("inital valid");
    }
}

export { initState };
export default reducer;
