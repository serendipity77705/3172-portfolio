import { test, expect } from "vitest";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import App from "../App";

test("displays main page with headers, footers and content", () => {
  render(<App />);
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
});
