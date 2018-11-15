/* eslint-disable no-unused-vars */
import React from "react";
import { shallow } from "enzyme";
import { createToggle } from "@mathdoy/toggle";
import ToggleProvider from "./ToggleProvider";
import WithToggleComponent from "../fixtures/WithToggle";

describe("withToggle", () => {
  it("Component should render foo feature", () => {
    const toggle = createToggle({
      features: {
        foo: true,
      },
    });

    const wrapper = shallow(
      <ToggleProvider toggle={toggle}>
        <WithToggleComponent />
      </ToggleProvider>
    );
    expect(wrapper.find(WithToggleComponent)).toHaveLength(1);
    expect(wrapper.html()).toBe(`<div><div>foo</div></div>`);
  });

  it("Component should NOT render foo feature", () => {
    const toggle = createToggle({
      features: {
        foo: false,
      },
    });

    const wrapper = shallow(
      <ToggleProvider toggle={toggle}>
        <WithToggleComponent />
      </ToggleProvider>
    );
    expect(wrapper.find(WithToggleComponent)).toHaveLength(1);
    expect(wrapper.html()).toBe(`<div></div>`);
  });
});
