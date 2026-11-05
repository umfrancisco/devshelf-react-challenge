import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("<App />", () => {
  it("shows the initial page", () => {
    render(<App />);
    expect(screen.getByText("A little home for side projects")).toBeInTheDocument();
  });
});