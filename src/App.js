import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Calculator from "./components/Calculator";
class App extends Component {
  render() {
    return (
      <Container>
        <Calculator />
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  align-items: center;
  display: flex;
  justify-content: center;
`;
Container.displayName = "div";
