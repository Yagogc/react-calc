import React from "react";
import { shallow, mount } from "enzyme";
import Display from "./Display";

describe("Display", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Display displayValue={""} />);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("renders the value of displayValue", () => {
    wrapper = mount(<Display displayValue="test" />);
    expect(wrapper.text()).toEqual("test");
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
