import "@testing-library/jest-dom";
import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/svelte";

import Flash from "./Flash.svelte";

test("render default", () => {
  render(Flash, {
    title: "hello world",
    variant: "success",
  });

  const title = screen.getByText("hello world");

  expect(title).toBeInTheDocument();
});

test("dismissable", async () => {
  const handler = vi.fn();

  const result = render(Flash, {
    title: "Something goes wrong",
    variant: "warning",
    dismissible: true,
  });

  result.component.$on("dismiss", handler);

  const dissmissButton = screen.getByRole("button");
  await fireEvent.click(dissmissButton);

  expect(handler).toHaveBeenCalled();
});