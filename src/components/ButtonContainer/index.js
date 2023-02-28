import React from "react";
import Button from "../Button";
import "./index.css";

const ButtonContainer = ({ btnOnClickChange, calculateFunction }) => {
  return (
    <div id="keys">
      <Button id={"clear"} dataValue={"C"} value={"C"} onClickFunction={btnOnClickChange}></Button>
      <Button classes={"charkey"} dataValue={" ( "} value={" ( "} onClickFunction={btnOnClickChange}></Button>
      <Button classes={"charkey"} dataValue={" ) "} value={" ) "} onClickFunction={btnOnClickChange}></Button>
      <Button classes={"charkey"} dataValue={" / "} value={" / "} onClickFunction={btnOnClickChange}></Button>
      <Button classes={"charkey"} dataValue={"7"} value={"7"} onClickFunction={btnOnClickChange}></Button>
      <Button classes={"charkey"} dataValue={"8"} value={"8"} onClickFunction={btnOnClickChange}></Button>
      <Button classes={"charkey"} dataValue={"9"} value={"9"} onClickFunction={btnOnClickChange}></Button>
      <Button classes={"charkey"} dataValue={" * "} value={" * "} onClickFunction={btnOnClickChange}></Button>
      <Button classes={"charkey"} dataValue={"4"} value={"4"} onClickFunction={btnOnClickChange}></Button>
      <Button classes={"charkey"} dataValue={"5"} value={"5"} onClickFunction={btnOnClickChange}></Button>
      <Button classes={"charkey"} dataValue={"6"} value={"6"} onClickFunction={btnOnClickChange}></Button>
      <Button classes={"charkey"} dataValue={" - "} value={" - "} onClickFunction={btnOnClickChange}></Button>
      <Button classes={"charkey"} dataValue={"1"} value={"1"} onClickFunction={btnOnClickChange}></Button>
      <Button classes={"charkey"} dataValue={"2"} value={"2"} onClickFunction={btnOnClickChange}></Button>
      <Button classes={"charkey"} dataValue={"3"} value={"3"} onClickFunction={btnOnClickChange}></Button>
      <Button classes={"charkey"} dataValue={" + "} value={" + "} onClickFunction={btnOnClickChange}></Button>
      <Button classes={"charkey"} dataValue={"0"} value={"0"} onClickFunction={btnOnClickChange}></Button>
      <Button classes={"charkey"} dataValue={"."} value={"."} onClickFunction={btnOnClickChange}></Button>
      <Button classes={"charkey"} dataValue={" % "} value={"mod"} onClickFunction={btnOnClickChange}></Button>
      <Button id={"equal"} dataValue={"="} value={"="} onClickFunction={calculateFunction}></Button>
    </div>
  );
};

export default ButtonContainer;
