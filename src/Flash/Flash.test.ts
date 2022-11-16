import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";

import Flash from "./Flash.svelte";

test("render default", () => {
  render(Flash, {
    title: "hello world",
    variant: "success",
  });

  const title = screen.getByText("hello world");

  expect(title).toBeInTheDocument();
});
