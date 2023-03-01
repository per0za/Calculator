import React from "react";
import "./index.css";

const Input = ({ id, classes, type, value, onChangeFunction, isDisabled }) => {
  return <input id={id} className={classes} type={type} onKeyDown={onChangeFunction} disabled={isDisabled} value={value}></input>;
};

export default Input;
