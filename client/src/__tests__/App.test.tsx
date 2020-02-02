import React from "react";
import { shallow, mount } from "enzyme";
import puppeteer from "puppeteer";

import App from "../App";

// Smoke Tests
it("renders without crashing", () => {
  shallow(<App />);
});

// Unit Tests
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
  expect(wrapper.find("a").text()).toEqual("Learn React");
});

it("renders link to reactjs.org", () => {
  const wrapper = shallow(<App />);
  var link = wrapper.find("a").prop("href");
  expect(link).toEqual("https://reactjs.org");
});

// Snapshot Testing
it("works", () => {
  const wrapper = mount(<App />);
  expect(wrapper).toMatchSnapshot();
});

// UI Regression Tests
describe("jest-image-snapshot usage with an image received from puppeteer", () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  it("works", async () => {
    const page = await browser.newPage();
    await page.goto("http://localhost:3000");
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  afterAll(async () => {
    await browser.close();
  });
});
