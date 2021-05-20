import React from "react";
import { render } from "@testing-library/react";
import AboutMe from "./AboutMe";

describe("AboutMe tests", () => {
  it("should render", () => {
    expect(render(<AboutMe />)).toBeTruthy();
  });
});
