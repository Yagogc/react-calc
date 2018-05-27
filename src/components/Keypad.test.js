import React from "react";
import { shallow, mount } from "enzyme";
import Keypad from "./Keypad";

describe("Keypad", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Keypad
        callOperator={jest.fn()}
        numbers={[]}
        operators={[]}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />
    );
  });
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(3);
  });
  it("should render an instance of the Key component for each index of numbers, operators, and the submit Key", () => {
    const numbers = ["0", "1"];
    const operators = ["+", "-"];
    const submit = 1;
    const keyTotal = numbers.length + operators.length + submit;
    wrapper.setProps({ numbers, operators });
    expect(wrapper.find("Key").length).toEqual(keyTotal);
  });
});

describe("mounted Keypad", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Keypad
        callOperator={jest.fn()}
        numbers={[]}
        operators={[]}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />
    );
  });

  /*   it("renders the values of numbers to the DOM", () => {
    wrapper.setProps({ numbers: ["0", "1", "2"] });
    console.log(wrapper.find(".numbers-container").hostNodes());
    wrapper.find(".numbers-container").forEach(node => {
      expect(node.text()).toEqual("012");
    });
  }); */
  it("renders the values of numbers to the DOM", () => {
    wrapper.setProps({ numbers: ["0", "1", "2"] });
    expect(
      wrapper
        .find(".numbers-container")
        .hostNodes()
        .text()
    ).toEqual("012");
  });

  it("renders the values of operators to the DOM", () => {
    wrapper.setProps({ operators: ["+", "-", "*", "/"] });
    expect(
      wrapper
        .find(".operators-container")
        .hostNodes()
        .text()
    ).toEqual("+-*/");
  });
});
