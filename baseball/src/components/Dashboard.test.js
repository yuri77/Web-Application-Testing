import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import Dashboard from "./Dashboard";

describe("</Dashboard>", () => {
  it("it should render without crashing", () => {
    const test = render(<Dashboard />);
  });
});
