import React from "react";
import Button from "../Button";
import "./index.css";

const Header = () => {
  return (
    <header className="flex align-center justify-between">
      <h1>Calculator</h1>
      <Button id={"themeSwitcher"} value={"Switch Theme Dark/Light"}></Button>
    </header>
  );
};

export default Header;
