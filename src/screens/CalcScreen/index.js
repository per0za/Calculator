import React, { useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import ButtonContainer from "../../components/ButtonContainer";
import Section from "../../components/Section";
import "./index.css";

const CalcScreen = () => {
  const [field, setField] = useState("");

  const onClickChange = (ev) => {
    const value = ev.currentTarget.dataset.value;
    const input = document.getElementById("input");

    if (value === "C") {
      setField("");
      input.focus();
      return;
    }

    const fieldValue = field + value;
    setField(fieldValue);
    console.log(value);
  };

  const onKeyDownFunction = (ev) => {
    const value = ev.currentTarget.value;
    console.log(value);
  };

  return (
    <main data-theme="dark">
      <Header></Header>
      <Input type={"text"} id={"input"} value={field} onChangeFunction={onKeyDownFunction}></Input>
      <ButtonContainer btnOnClickChange={onClickChange}></ButtonContainer>
      <Section></Section>
    </main>
  );
};

export default CalcScreen;
