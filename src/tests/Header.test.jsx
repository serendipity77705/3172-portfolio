import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/Header";
import { test, expect } from "vitest";
import "@testing-library/jest-dom";

test("displays all navbar links", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );

  expect(screen.getByText(/Malk Daboor/i)).toBeInTheDocument();

  expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /projects/i })).toBeInTheDocument();
});
