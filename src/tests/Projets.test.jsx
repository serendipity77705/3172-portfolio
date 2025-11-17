import { test, expect } from "vitest";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import Projects from "../pages/Projects";

test("displays projects I worked on", () => {
  render(<Projects />);
  expect(screen.getByText(/years/i)).toBeInTheDocument();
});
