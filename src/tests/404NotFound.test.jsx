import { test, expect } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "../pages/404NotFound";

test("displays 404 error when something error requested", () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );

  expect(screen.getByText(/404/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /go back home/i })).toBeInTheDocument();
});
