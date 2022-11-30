import "@testing-library/jest-dom";
import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/svelte";

import FlashView from "./FlashView.svelte";

test("render default", () => {
  render(FlashView, {
    title: "hello world",
    variant: "success",
  });

  const title = screen.getByText("hello world");

  expect(title).toBeInTheDocument();
});

test("dismissable", async () => {
  const handler = vi.fn();

  const result = render(FlashView, {
    title: "Something goes wrong",
    variant: "warning",
    dismissible: true,
  });

  result.component.$on("dismiss", handler);

  const dissmissButton = screen.getByRole("button");
  await fireEvent.click(dissmissButton);

  expect(handler).toHaveBeenCalled();
});

test("render with icon", () => {
  render(FlashView, {
    title: "hello world",
    variant: "danger",
    icon: true,
  });

  const icon = screen.getByTestId("octicon");

  expect(icon).toBeInTheDocument();
});
