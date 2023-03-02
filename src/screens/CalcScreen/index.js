import React, { useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import ButtonContainer from "../../components/ButtonContainer";
import Section from "../../components/Section";
import "./index.css";

const CalcScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const allowedKeys = ["(", ")", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "%"];
  const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];


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

  const onChangeFunction = (value) => {
    setInputValue(value) 
  };

  const onKeyDownFunction = (ev) => {
    ev.preventDefault();
    if (allowedKeys.includes(ev.key)) {
      if (numbers.includes(ev.key)) {
        onChangeFunction(inputValue + ev.key)
      } else {
        onChangeFunction(inputValue + ` ${ev.key} `)
      }
      return;
    }
    if (ev.key === "Backspace") {
      setInputValue(inputValue.slice(0, -1));
    }
    if (ev.key === "Enter") {
      calculate();
    }
  }

  return (
    <main data-theme="dark">
      <Header></Header>
      <Input type={"text"} id={"input"} value={inputValue} onChangeFunction={onChangeFunction} onKeyDownFunction={onKeyDownFunction} ></Input>
      <ButtonContainer btnOnClickChange={onClickChange} calculateFunction={calculate}></ButtonContainer>
      <Section></Section>
    </main>
  );
};

export default CalcScreen;
