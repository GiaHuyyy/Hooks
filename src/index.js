import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Hooks
import UseState from "./hooks/UseState";
import UseEffect from "./hooks/UseEffect";
// import UseLayoutEffect from './hooks/UseLayoutEffect';
import UseRef from "./hooks/UseRef";
import UseCallback from "./hooks/UseCallBack";


// import UseReducer from './hooks/UseReducer';
// import UseImperativeHandle from './hooks/UseImperativeHandle';
// import UseDebugValue from './hooks/UseDebugValue';
// import UseTransition from './hooks/UseTransition';
// import UseDeferredValue from './hooks/UseDeferredValue';
// import UseId from './hooks/UseId';
// import UseSyncExternalStore from './hooks/UseSyncExternalStore';
// import UseEvent from './hooks/UseEvent';

// Fake comments
function emitComment(id) {
    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`lessson-${id}`, {
                detail: `Nội dung comment của lesson ${id}`,
            })
        );
    }, 2000);
}

emitComment(1);
emitComment(2);
emitComment(3);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* <App /> */}
        {/* {<UseState />} */}
        {/* {<UseEffect />} */}
        {/* <UseLayoutEffect /> */}
        {/* <UseRef /> */}
        {<UseCallback />}
        {/* <UseReducer /> */}
        {/* <UseImperativeHandle /> */}
        {/* <UseDebugValue /> */}
        {/* <UseTransition /> */}
        {/* <UseDeferredValue /> */}
        {/* <UseId /> */}
        {/* <UseSyncExternalStore /> */}
        {/* <UseEvent /> */}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
