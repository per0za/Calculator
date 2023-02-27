import React from "react";
import Button from "../Button";
import "./index.css";

const ButtonContainer = () => {
  return (
    <div id="keys">
      <Button id={"clear"} value={"C"}></Button>
      <Button classes={"charkey"} dataValue={" ( "} value={" ( "}></Button>
      <Button classes={"charkey"} dataValue={" ) "} value={" ) "}></Button>
      <Button classes={"charkey"} dataValue={" / "} value={" / "}></Button>
      <Button classes={"charkey"} dataValue={"7"} value={"7"}></Button>
      <Button classes={"charkey"} dataValue={"8"} value={"8"}></Button>
      <Button classes={"charkey"} dataValue={"9"} value={"9"}></Button>
      <Button classes={"charkey"} dataValue={" * "} value={" * "}></Button>
      <Button classes={"charkey"} dataValue={"4"} value={"4"}></Button>
      <Button classes={"charkey"} dataValue={"5"} value={"5"}></Button>
      <Button classes={"charkey"} dataValue={"6"} value={"6"}></Button>
      <Button classes={"charkey"} dataValue={" - "} value={" - "}></Button>
      <Button classes={"charkey"} dataValue={"1"} value={"1"}></Button>
      <Button classes={"charkey"} dataValue={"2"} value={"2"}></Button>
      <Button classes={"charkey"} dataValue={"3"} value={"3"}></Button>
      <Button classes={"charkey"} dataValue={" + "} value={" + "}></Button>
      <Button classes={"charkey"} dataValue={"0"} value={"0"}></Button>
      <Button classes={"charkey"} dataValue={"."} value={"."}></Button>
      <Button classes={"charkey"} dataValue={" % "} value={"mod"}></Button>
      <Button id={"equal"} value={"="}></Button>
    </div>
  );
};

export default ButtonContainer;
