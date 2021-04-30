import React from "react";
import { render } from "@testing-library/react";
import ContactMe from "./ContactMe";

describe("ContactMe tests", () => {
  it("should render", () => {
    expect(render(<ContactMe />)).toBeTruthy();
  });
});
