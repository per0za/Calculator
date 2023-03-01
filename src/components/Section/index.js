import React from "react";
import Button from "../Button";
import Input from "../Input";
import "./index.css";

const Section = () => {
  const copy = (ev) => {
    const button = ev.currentTarget;
    const resultInput = document.getElementById("result");

    button.innerText = "Copied!";
    button.classList.add("success");
    navigator.clipboard.writeText(resultInput.value);

    setTimeout(() => {
      button.innerText = "Copy";
      button.classList.remove("success");
    }, 3 * 1000);
  };

  return (
    <section className="flex align-center justify-between">
      <Button id={"copyToClipboard"} value={"Copy"} onClickFunction={copy}></Button>
      <Input type={"text"} id={"result"} isDisabled={true}></Input>
    </section>
  );
};

export default Section;
