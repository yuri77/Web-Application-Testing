import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import Dashboard from "./Dashboard";

describe("</Display>", () => {
  it("it should render without crashing", () => {
    render(<Dashboard />);
  });

  it("strike button", () => {
    let click = false;
    const { getByText } = render(<Dashboard strike={() => (clicked = true)} />);
  });

  it("strike with mocked function", () => {
    const click = jest.fn();
    const { getByText } = render(<Dashboard strike={click} />);
    const strikeButton = getByText(/strike/i);
    fireEvent.click(strikeButton);
    expect(click).toBeCalled();
  });
});
