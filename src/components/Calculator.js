import React, { Component } from "react";
import styled from "styled-components";
import Display from "./Display";
import Keypad from "./Keypad";

class Calculator extends Component {
  state = {
    // value to be displayed in <Display />
    displayValue: "0",
    // values to be displayed in number <Keys />
    numbers: [],
    // values to be displayed in operator <Keys />
    operators: [],
    // operator selected for math operation
    selectedOperator: "",
    // stored value to use for math operation
    storedValue: ""
  };

  callOperator() {
    console.log("call operation");
  }

  setOperator() {
    console.log("set operation");
  }

  updateDisplay() {
    console.log("update display");
  }

  render() {
    const { displayValue, numbers, operators } = this.state;
    return (
      <Container>
        <Display displayValue={displayValue} />
        <Keypad
          callOperator={this.callOperator}
          numbers={numbers}
          operators={operators}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
        />
      </Container>
    );
  }
}

export default Calculator;

const Container = styled.div`
  background-color: #696969;
  height: 100%;
  width: 100%;
  @media screen and (min-width: 1024px) {
    height: 72%;
    width: 36%;
  }
`;

Container.displayName = "div";
