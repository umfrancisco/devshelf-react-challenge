import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("<App />", () => {
  it("shows the initial page", () => {
    render(<App />);
    expect(screen.getByText("A little home for side projects")).toBeInTheDocument();
  });

  it("test frontend button option", async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole("button", {
      name: /frontend/i,
    });

    await user.click(button);

    expect(
      screen.getByText((_, element) =>
        element?.tagName === "P" &&
        element.textContent?.replace(/\s+/g, " ").trim() === "Showing 3 of 8 projects"
      )
    ).toBeInTheDocument();
  });
});