import { test, expect } from "vitest";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import About from "../pages/About";

test("displays projects I worked on", () => {
  render(<About />);
  expect(screen.getByText(/InterTalk/i)).toBeInTheDocument();
});
