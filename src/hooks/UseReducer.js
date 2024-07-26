import { useReducer, useRef } from "react";
// useReducer           |     useState
// 1. Initial state     |     1. Initial state
// 2. Actions           |     2. Actions
// 3. Reducer           |
// 4. Dispatch          |

import Logger from "./Logger";
// Counter
const INITIAL_STATE = 0;

const UP_ACTION = "up";
const DOWN_ACTION = "down";

function reducer(state, action) {
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
    }
}

// Todo
const INITIAL_STATE_TODOS = {
    job: "",
    jobs: [],
};

const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload,
    };
};

const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload,
    };
};

const deleteJob = (index) => {
    return {
        type: DELETE_JOB,
        index,
    };
};
function reducerJob(state, action) {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload,
            };
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload],
            };
        case DELETE_JOB:
            const newJobs = [...state.jobs];

            newJobs.splice(action.index, 1);

            return {
                ...state,
                jobs: newJobs,
            };
        default:
            throw new Error("Invalid action");
    }
}

function UseReducer() {
    const [count, dispatch] = useReducer(reducer, INITIAL_STATE);
    //

    const [state, dispatchJob] = useReducer(
        Logger(reducerJob),
        INITIAL_STATE_TODOS
    );
    const { job, jobs } = state;
    const refElement = useRef();

    const handleSubmit = () => {
        dispatchJob(addJob(job));
        dispatchJob(setJob(""));
        refElement.current.focus();
    };

    return (
        <div className="container" style={{ paddingLeft: "50vw" }}>
            <p>{count}</p>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
            <hr />

            {/* Todo */}
            <h2>Todo</h2>

            <input
                ref={refElement}
                value={job}
                onChange={(e) => {
                    dispatchJob(setJob(e.target.value));
                }}
            />

            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span
                            onClick={() => dispatchJob(deleteJob(index))}
                            style={{ cursor: "pointer" }}
                        >
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UseReducer;
