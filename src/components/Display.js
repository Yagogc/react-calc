import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Display = ({ displayValue }) => {
  return (
    <Container>
      <Value>{displayValue}</Value>
    </Container>
  );
};

Display.propTypes = { displayValue: PropTypes.string.isRequired };

export default Display;
const Container = styled.div`
  align-items: center;
  background: #1d1f1f;
  display: flex;
  ${"" /* height: 72%;
  padding: 0 4%;
  width: 36%; */} padding: 4% 4% 0;
`;
Container.displayName = "div";

const Value = styled.p`
  color: #23e000;
  font-size: 4em;
  font-family: "Orbitron", sans-serif;
  font-weight: 400;
  margin-left: auto;
  overflow: hidden;
  @media screen and (min-width: 1024px) {
    font-size: 6em;
  }
`;
Value.displayName = "p";
