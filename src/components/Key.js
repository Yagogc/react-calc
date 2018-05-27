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
  &.number-key {
    background-color: #696969;
    width: calc(100% / 3);
    &:hover {
      background-color: #3f3f3f;
    }
  }
  &.operator-key {
    background-color: #545454;
    width: 100%;
    &:hover {
      background-color: #2a2a2a;
    }
  }
  &.submit-key {
    background-color: #d18800;
    height: 100%;
    width: 100%;
    &:hover {
      background-color: #aa6e00;
    }
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
