import { createContext, useState } from "react";
import "../App.css";

const ThemeContext = createContext();
// Context
// CompA => CompB => CompC

// 1. Create context (Bối cảnh)
// 2. Provider (Nhà cung cấp)
// 3. Consumer (Người tiêu dùng)

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const value = { theme, toggleTheme };
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };
