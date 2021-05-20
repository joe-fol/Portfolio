import React from "react";
import { render } from "@testing-library/react";
import FooterButtons from "./FooterButtons";

describe("FooterButtons tests", () => {
  it("should render", () => {
    expect(render(<FooterButtons />)).toBeTruthy();
  });
});
