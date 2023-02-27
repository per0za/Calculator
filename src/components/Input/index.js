import React from "react";

const Input = ({ id, classes, value, onChangeFunction }) => {
  return (
    <input id={id} className={classes} onChange={onChangeFunction}>
      {value}
    </input>
  );
};

export default Input;
