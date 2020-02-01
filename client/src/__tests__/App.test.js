import React from "react";
import { shallow } from "enzyme";
import App from "../App";

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders welcome message", () => {
  const wrapper = shallow(<App />);
  const welcome = (
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
  );
  expect(wrapper.contains(welcome)).toEqual(true);
});

it("renders learn react link", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.containsMatchingElement(<a>Learn React</a>)).toEqual(true);
});

it("renders link to reactjs.org", () => {
  const wrapper = shallow(<App />);

  var ahref = wrapper.find("a").prop("href");
  expect(ahref).toEqual("https://reactjs.org");
});
