import React from "react";
import { shallow } from "enzyme";
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

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(3);
  });

  it("renders the values of numbers", () => {
    wrapper.setProps({ numbers: ["0", "1", "2"] });
    expect(
      wrapper
        .find(".numbers-container")
        .dive()
        .text()
    ).toEqual("012");
  });

  it("renders the values of operators", () => {
    wrapper.setProps({ operators: ["+", "-", "*", "/"] });
    expect(
      wrapper
        .find(".operators-container")
        .dive()
        .text()
    ).toEqual("+-*/");
  });
});
