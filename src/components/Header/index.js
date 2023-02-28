import React from "react";
import Button from "../Button";
import "./index.css";

const Header = () => {
  const themeSwitch = () => {
    const main = document.querySelector("main");
    const root = document.querySelector(":root");

    if (main.dataset.theme === "dark") {
      root.style.setProperty("--bg-color", "#f1f5f9");
      root.style.setProperty("--border-color", "#aaa");
      root.style.setProperty("--font-color", "#212529");
      root.style.setProperty("--primary-color", "#26834a");
      main.dataset.theme = "light";
    } else {
      root.style.setProperty("--bg-color", "#212529");
      root.style.setProperty("--border-color", "#666");
      root.style.setProperty("--font-color", "#f1f5f9");
      root.style.setProperty("--primary-color", "#4dff91");
      main.dataset.theme = "dark";
    }
  };

  return (
    <header className="flex align-center justify-between">
      <h1>Calculator</h1>
      <Button id={"themeSwitcher"} value={"Switch Theme Dark/Light"} onClickFunction={themeSwitch}></Button>
    </header>
  );
};

export default Header;
