import { Sun, Moon } from "@phosphor-icons/react";
import styles from "./styles.module.css";
import Image from "../../assets/cara.png";
import { setData, getData } from "../../core/lStorage";
import { useState, useEffect } from "react";

export function Header() {
    const [theme, setTheme] = useState(getData("theme") || "light");
    useEffect(() => {
        setData("theme", theme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    }, [theme]);

    const alterTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <header className={styles.container}>
            <img src={Image} alt="logo" />
            <nav>
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Projetos</a>
                <a href="#">Habilidades</a>
            </nav>

            <button>
                {
                    theme === "light" ? (
                        <Sun onClick={alterTheme} size={32}/>
                    ) : (
                        <Moon onClick={alterTheme} size={32}/>
                    )
                }
            </button>
        </header>
    );
}