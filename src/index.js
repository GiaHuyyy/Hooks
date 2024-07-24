import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Hooks
import UseState from "./hooks/UseState";
// import UseEffect from "./hooks/UseEffect";
// import UseReducer from './hooks/UseReducer';
// import UseLayoutEffect from './hooks/UseLayoutEffect';
// import UseRef from './hooks/UseRef';
// import UseImperativeHandle from './hooks/UseImperativeHandle';
// import UseDebugValue from './hooks/UseDebugValue';
// import UseTransition from './hooks/UseTransition';
// import UseDeferredValue from './hooks/UseDeferredValue';
// import UseId from './hooks/UseId';
// import UseSyncExternalStore from './hooks/UseSyncExternalStore';
// import UseEvent from './hooks/UseEvent';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* <App /> */}
        {<UseState />}
        {/* {<UseEffect />} */}
        {/* <UseReducer /> */}
        {/* <UseLayoutEffect /> */}
        {/* <UseRef /> */}
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
