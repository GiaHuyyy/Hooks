import Paragraph from "./Paragraph";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
// useContext lưu các giá trị qua một tham chiếu bên ngoài function component
function UseContextt() {
    const toggleTheme = useContext(ThemeContext).toggleTheme;

    return (
        <div>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Paragraph />
        </div>
    );
}

export default UseContextt;
