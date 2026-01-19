import React from "react";
import { render } from "@testing-library/react";
import Sidebar from "../layout/Sidebar";

describe("Sidebar", () => {
  it("renders RemoteSidebar with onNavigate prop", async () => {
    const mockOnNavigate = jest.fn();
    const { findByText } = render(<Sidebar onNavigate={mockOnNavigate} />);
    expect(await findByText("Loading sidebar...")).toBeInTheDocument();
  });
});