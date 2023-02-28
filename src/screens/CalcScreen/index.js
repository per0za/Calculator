import React from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import ButtonContainer from "../../components/ButtonContainer";
import Section from "../../components/Section";

const CalcScreen = () => {
  return (
    <main>
      <Header></Header>
      <Input type={"text"} id={"input"}></Input>
      <ButtonContainer></ButtonContainer>
      <Section></Section>
    </main>
  );
};
