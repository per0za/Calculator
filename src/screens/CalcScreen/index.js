import React, { useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import ButtonContainer from "../../components/ButtonContainer";
import Section from "../../components/Section";
import "./index.css";

const CalcScreen = () => {
  const [inputValue, setInputValue] = useState("");

  const onClickChange = (ev) => {
    const value = ev.currentTarget.dataset.value;
    const input = document.getElementById("input");

    if (value === "C") {
      setInputValue("");
      input.focus();
      return;
    }

    const fieldValue = inputValue + value;
    setInputValue(fieldValue);
    console.log(value);
  };

  const calculate = () => {
    const input = document.getElementById("input");
    const resultInput = document.getElementById("result");
    try {
      const result = eval(input.value);
      resultInput.value = result;
    } catch (error) {
      resultInput.value = "ERROR";
      resultInput.classList.add("error");
      setTimeout(() => {
        resultInput.classList.remove("error");
        resultInput.value = "";
        input.focus();
        setInputValue("");
      }, 2 * 1000);
    }
  };

  const onKeyDownFunction = (ev) => {
    const value = ev.currentTarget.value;
    console.log(value);
  };

  return (
    <main data-theme="dark">
      <Header></Header>
      <Input type={"text"} id={"input"} value={inputValue} onChangeFunction={onKeyDownFunction}></Input>
      <ButtonContainer btnOnClickChange={onClickChange} calculateFunction={calculate}></ButtonContainer>
      <Section></Section>
    </main>
  );
};

export default CalcScreen;
