import React from "react";
import { render } from "@testing-library/react";
import CarouselButton from "./CarouselButton";

describe("CarouselButton tests", () => {
  it("should render", () => {
    expect(render(<CarouselButton />)).toBeTruthy();
  });
});
