import { test, expect } from "vitest";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import { MemoryRouter } from "react-router-dom";

test("Shows the Home Screen", () => {
  render(
  <MemoryRouter>
    <Home />
  </MemoryRouter>
  );
  expect(screen.getByText(/Dalhousie/i)).toBeInTheDocument();
  
  const aboutButton = screen.getByRole('link', { name: /about me/i });
  expect(aboutButton).toBeInTheDocument();
  expect(aboutButton).toHaveAttribute('href', "/about");

  const projectsButton = screen.getByRole('link', { name: /my projects/i });
  expect(projectsButton).toBeInTheDocument();
  expect(projectsButton).toHaveAttribute('href', "/projects");

});
