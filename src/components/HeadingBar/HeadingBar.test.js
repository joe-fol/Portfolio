import React from "react";
import { render } from "@testing-library/react";
import HeadingBar from "./HeadingBar";

describe("HeadingBar tests", () => {
  it("should render", () => {
    expect(render(<HeadingBar />)).toBeTruthy();
  });
});
