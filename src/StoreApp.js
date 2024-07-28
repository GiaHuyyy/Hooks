import { useStore, actions } from "./store";
import { useRef, useState } from "react";

function StoreApp() {
    const [state, dispatch] = useStore();
    const { todos, todoInput } = state;

    const refElement = useRef();

    const [active, setActive] = useState(null);

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput));
        dispatch(actions.setTodoInput(""));
        refElement.current.focus();
    };

    const handleDelete = (index) => {
        dispatch(actions.deleteTodo(index));
    };

    const handleEdit = (index) => {
        setActive(index);
        dispatch(actions.editTodo(index));
        refElement.current.focus();
    };
    const handleSave = (active) => {
        dispatch(actions.saveTodo(active));
        setActive(null);
        dispatch(actions.setTodoInput(""));
        refElement.current.focus();
    };

    const handleCancel = () => {
        setActive(null);
        dispatch(actions.setTodoInput(""));
        refElement.current.focus();
    };

    const handleClearAll = () => {
        dispatch(actions.clearAllTodo());
        setActive(null);
        dispatch(actions.setTodoInput(""));
        refElement.current.focus();
    };
    console.log(active);
    return (
        <div style={{ paddingLeft: "30vw" }}>
            <input
                ref={refElement}
                value={todoInput}
                placeholder="Enter todo..."
                onChange={(e) => {
                    dispatch(actions.setTodoInput(e.target.value));
                }}
            />
            <button
                style={{ display: active === null ? "inline-block" : "none" }}
                onClick={handleAdd}
            >
                Add
            </button>
            <button
                style={{
                    marginLeft: "10px",
                    display: active === null ? "inline-block" : "none",
                }}
                onClick={handleClearAll}
            >
                Clear all
            </button>
            <button
                style={{
                    margin: "0 10px",
                    display: active === null ? "none" : "inline-block",
                }}
                onClick={() => {
                    handleSave(active);
                }}
            >
                Save
            </button>
            <button
                style={{ display: active === null ? "none" : "inline-block" }}
                onClick={handleCancel}
            >
                Cancel
            </button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <span
                            style={{
                                margin: "0 10px",
                                cursor: "pointer",
                                background: "red",
                            }}
                            onClick={() => {
                                handleEdit(index);
                            }}
                        >
                            {active === index ? "Editing" : "Edit"}
                        </span>
                        <span
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                                handleDelete(index);
                            }}
                        >
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StoreApp;
