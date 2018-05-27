import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Key from "./Key";

const Keypad = ({
  callOperator,
  numbers,
  operators,
  setOperator,
  updateDisplay
}) => {
  numbers = numbers.map(number => {
    return (
      <Key
        key={number}
        keyAction={updateDisplay}
        keyType="number-key"
        keyValue={number}
      />
    );
  });

  operators = operators.map(operator => {
    return (
      <Key
        key={operator}
        keyAction={setOperator}
        keyType="operator-key"
        keyValue={operator}
      />
    );
  });

  return (
    <Container className="keypad-container">
      <Numbers className="numbers-container">{numbers}</Numbers>
      <Operators className="operators-container">{operators}</Operators>
      <Key keyAction={callOperator} keyType="submit-key" keyValue="=" />
    </Container>
  );
};

Keypad.propTypes = {
  callOperator: PropTypes.func.isRequired,
  numbers: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
  setOperator: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired
};

export default Keypad;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 80%;
  padding: 2%;
  width: 100%;
`;
Container.displayName = "div";

const Numbers = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 80%;
  width: 75%;
`;
Numbers.displayName = "div";

const Operators = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 25%;
`;
Operators.displayName = "div";

const Submit = styled.div`
  height: 20%;
  width: 100%;
`;
Submit.displayName = "div";
