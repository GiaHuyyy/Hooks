import { useReducer } from "react";
import Context from "./Context";
import reducer, { initState } from "./reducer";
import Logger from "../hooks/Logger";

function Provider({ children }) {
    const [state, dispatch] = useReducer(Logger(reducer), initState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
}

export default Provider;
