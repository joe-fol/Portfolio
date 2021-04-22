import React from "react";
import { render } from "@testing-library/react";
import Landing from "./Landing";

describe("Landing tests", () => {
  it("should render", () => {
    expect(render(<Landing />)).toBeTruthy();
  });
});
