import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import { test, expect } from "vitest";
import "@testing-library/jest-dom";

test("renders footer with links and text", () => {
  render(<Footer />);
  const githubLink = screen.getByRole('link', { name: /GitHub/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', "https://github.com/serendipity77705");

  const linkedinLink = screen.getByRole("link", { name: /linkedIn/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/malk-daboor/");

  const emailLink = screen.getByRole("link", { name: /Email/i });
  expect(emailLink).toBeInTheDocument();
  expect(emailLink).toHaveAttribute("href", "mailto:malk.daboor@dal.ca");

});
