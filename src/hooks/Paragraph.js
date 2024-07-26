import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function Paragraph() {
    // Consumer
    const theme = useContext(ThemeContext).theme;

    return (
        <div className="container" style={{ paddingLeft: "50vw" }}>
            <p className={`${theme}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                voluptas, totam voluptate quidem, numquam labore voluptates
            </p>
        </div>
    );
}

export default Paragraph;
