import logo from "./logo.svg";
import "./App.css";

// Hooks
import UseState from "./hooks/UseState";
import UseEffect from "./hooks/UseEffect";
// import UseLayoutEffect from './hooks/UseLayoutEffect';
import UseRef from "./hooks/UseRef";
import UseCallback from "./hooks/UseCallBack";
import UseMeMo from "./hooks/UseMemo";
import UseReducer from "./hooks/UseReducer";
import UseContextt from "./hooks/UseContext";
import UseImperativeHandle from "./hooks/UseImperativeHandle";

// import UseDebugValue from './hooks/UseDebugValue';
// import UseTransition from './hooks/UseTransition';
// import UseDeferredValue from './hooks/UseDeferredValue';
// import UseId from './hooks/UseId';
// import UseSyncExternalStore from './hooks/UseSyncExternalStore';
// import UseEvent from './hooks/UseEvent';

// Global State with Context + useReducer
import StoreApp from "./StoreApp";

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

function App() {
    return (
        <div className="App">
            {/* {<UseState />} */}
            {/* {<UseEffect />} */}
            {/* <UseLayoutEffect /> */}
            {/* <UseRef /> */}
            {/* {<UseCallback />} */}
            {/* {<UseMeMo />} */}
            {/* <UseReducer /> */}
            {/* <UseContextt /> */}

            {/* {<StoreApp />} */}

            <UseImperativeHandle />
            {/* <UseDebugValue /> */}
            {/* <UseTransition /> */}
            {/* <UseDeferredValue /> */}
            {/* <UseId /> */}
            {/* <UseSyncExternalStore /> */}
            {/* <UseEvent /> */}
        </div>
    );
}

export default App;
