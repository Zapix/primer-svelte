import "@testing-library/jest-dom";
import { vi } from "vitest";
import { screen, render, fireEvent } from "@testing-library/svelte";
import ListItemView from "./ListItemView.svelte";

test("render default", async () => {
  const handler = vi.fn();

  const result = render(ListItemView, {
    title: "test",
    disabled: false,
  });

  result.component.$on("click", handler);

  const item = screen.getByText("test");

  expect(item).toBeInTheDocument();

  await fireEvent.click(item);
  expect(handler).toHaveBeenCalled();
});

test("render disabled element", async () => {
  const handler = vi.fn();

  const result = render(ListItemView, {
    title: "test",
    disabled: true,
  });

  result.component.$on("click", handler);

  const item = screen.getByText("test");

  expect(item).toBeInTheDocument();

  await fireEvent.click(item);
  expect(handler).not.toHaveBeenCalled();
});
