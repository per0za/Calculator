import React from "react";
import Button from "../Button";
import Input from "../Input";
import "./index.css";

const Section = () => {
  const copy = () => {
    const button = ev.currentTarget;
    if (button.innerText === "Copy") {
      button.innerText = "Copied!";
      button.classList.add("success");
      navigator.clipboard.writeText(resultInput.value);
    } else {
      button.innerText = "Copy";
      button.classList.remove("success");
    }
  };

  return (
    <section className="flex align-center justify-between">
      <Button id={"copyToClipboard"} value={"Copy"}></Button>
      <Input type={"text"} id={"result"} isDisabled={true}></Input>
    </section>
  );
};

export default Section;
