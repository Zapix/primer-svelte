import "@testing-library/jest-dom";

import { render, fireEvent, screen } from "@testing-library/svelte";

import Counter from "./Counter.svelte";

test("render button", () => {
  render(Counter);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});
