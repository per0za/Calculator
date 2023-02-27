import React from "react";

const Button = ({ id, classes, value, dataValue, onClickFunction }) => {
  return (
    <button id={id} className={classes} onClick={onClickFunction} data-value={dataValue}>
      {value}
    </button>
  );
};

export default Button;
