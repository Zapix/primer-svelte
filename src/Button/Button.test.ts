import "@testing-library/jest-dom";
import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/svelte";

import ButtonView from "./ButtonView.svelte";

test("render default", async () => {
  const handler = vi.fn();
  const result = render(ButtonView, {
    title: "test",
  });

  result.component.$on("click", handler);

  const button = screen.getByText("test");
  expect(button).toBeInTheDocument();

  await fireEvent.click(button);
  expect(handler).toHaveBeenCalled();
});

test("disabled button", () => {
  render(ButtonView, {
    title: "test",
    disabled: true,
  });

  const button = screen.getByText("test");
  expect((button as HTMLButtonElement).disabled).toBeTruthy();
});

test("selected button", () => {
  render(ButtonView, {
    title: "test",
    selected: true,
  });

  const button = screen.getByText("test");
  expect((button as HTMLButtonElement).disabled).toBeTruthy();
});
