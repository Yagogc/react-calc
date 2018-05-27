import React, { Component } from "react";
import styled from "styled-components";
import Display from "./Display";
import Keypad from "./Keypad";

class Calculator extends Component {
  state = {
    // value to be displayed in <Display />
    displayValue: "0",
    // values to be displayed in number <Keys />
    numbers: ["9", "8", "7", "6", "5", "4", "3", "2", "1", ".", "0", "ce"],
    // values to be displayed in operator <Keys />
    operators: ["/", "x", "-", "+"],
    // operator selected for math operation
    selectedOperator: "",
    // stored value to use for math operation
    storedValue: ""
  };

  callOperator() {
    console.log("call operation");
  }

  setOperator = value => {
    let { displayValue, selectedOperator, storedValue } = this.state;

    // check if a value is already present for selectedOperator
    if (selectedOperator === "") {
      // update storedValue to the value of displayValue
      storedValue = displayValue;
      // reset the value of displayValue to '0'
      displayValue = "0";
      // update the value of selectedOperator to the given value
      selectedOperator = value;
    } else {
      // if selectedOperator is not an empty string
      // update the value of selectedOperator to the given value
      selectedOperator = value;
    }

    this.setState({ displayValue, selectedOperator, storedValue });
  };

  updateDisplay = value => {
    let { displayValue } = this.state;

    // prevent multiple occurences of '.'
    if (value === "." && displayValue.includes(".")) value = "";

    if (value === "ce") {
      // deletes last char in displayValue
      displayValue = displayValue.substr(0, displayValue.length - 1);
      // set displayValue to '0' if displayValue is empty string
      if (displayValue === "") displayValue = "0";
    } else {
      // replace displayValue with value if displayValue equal to '0'
      // else concatenate displayValue and value
      displayValue === "0" ? (displayValue = value) : (displayValue += value);
    }

    this.setState({ displayValue });
  };

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
