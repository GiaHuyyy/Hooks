import { useState, useRef, useEffect } from "react";
// Lưu các giá trị qua một tham chiếu bên ngoài function component

function UseRef() {
    const [count, setCount] = useState(180);

    const timeId = useRef();
    const prevCount = useRef();

    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    const start = () => {
        timeId.current = setInterval(() => {
            setCount((prev) => prev - 1);
        }, 1000);
    };

    const stop = () => {
        clearInterval(timeId.current);
    };

    console.log(count, prevCount.current);

    return (
        <div className="container" style={{ paddingLeft: "50vw" }}>
            <h1>{count}</h1>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    );
}

export default UseRef;
