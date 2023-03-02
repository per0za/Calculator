import React from "react";
import "./index.css";

const Input = ({ id, classes, type, value, onChangeFunction, onKeyDownFunction, isDisabled }) => {
  return <input id={id} className={classes} type={type} onChange={onChangeFunction} onKeyDown={onKeyDownFunction} disabled={isDisabled} value={value}></input>;
};

export default Input;
