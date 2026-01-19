jest.mock("mfe1/App", () => () => <div>MFE1 Loaded</div>);
jest.mock("mfe2/App", () => () => <div>MFE2 Loaded</div>);

import React from "react";
import { render } from "@testing-library/react";
import { Router } from "../routes/Router";

describe("Router", () => {
  it("renders MFE1 when route is 'mfe1'", async () => {
    const { findByText } = render(<Router route="mfe1" />);
    expect(await findByText("Loading...")).toBeInTheDocument();
    expect(await findByText("MFE1 Loaded")).toBeInTheDocument();
  });

  it("renders MFE2 when route is 'mfe2'", async () => {
    const { findByText } = render(<Router route="mfe2" />);
    expect(await findByText("Loading...")).toBeInTheDocument();
    expect(await findByText("MFE2 Loaded")).toBeInTheDocument();
  });
});