import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Key = ({ keyAction, keyType, keyValue }) => {
  return (
    <Container className={`key-container ${keyType}`}>
      <Value className="key-value">{keyValue}</Value>
    </Container>
  );
};

Key.propTypes = {
  keyAction: PropTypes.func.isRequired,
  keyType: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired
};

export default Key;

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 25%;
  justify-content: center;
  transition: background-color 0.3s linear;
  &:hover {
    cursor: pointer;
  }
`;
Container.displayName = "div";

const Value = styled.p`
  color: #d3d3d3;
  font-family: "Orbitron", sans-serif;
  font-size: 3em;
  font-weight: 700;
`;
Value.displayName = "p";
