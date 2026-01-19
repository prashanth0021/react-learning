import React from "react";
import { render } from "@testing-library/react";
import { Router } from "../routes/Router";

describe("Router", () => {
  it("renders MFE1 when route is 'mfe1'", async () => {
    const { findByText } = render(<Router route="mfe1" />);
    expect(await findByText("Loading...")).toBeInTheDocument();
  });

  it("renders MFE2 when route is 'mfe2'", async () => {
    const { findByText } = render(<Router route="mfe2" />);
    expect(await findByText("Loading...")).toBeInTheDocument();
  });
});