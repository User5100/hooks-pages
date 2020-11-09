import { shallow, mount, render } from "enzyme";
import App from "./App";
import React from "react";

test("adds 1 + 2 to equal 3", () => {
  const wrapper = shallow(<App />);
  expect(1 + 2).toBe(3);
});
