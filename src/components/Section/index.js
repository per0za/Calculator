import React from "react";
import Button from "../Button";
import Input from "../Input";
import "./index.css";

const Section = () => {
  return (
    <section>
      <Button id={"copyToClipboard"} value={"Copy"}></Button>
      <Input type={"text"} id={"result"} isDisabled={true}></Input>
    </section>
  );
};

export default Section;
