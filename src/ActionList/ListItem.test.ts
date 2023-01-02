import "@testing-library/jest-dom";
import { vi } from "vitest";
import { screen, render, fireEvent } from "@testing-library/svelte";
import ListItemView from "./ListItemView.svelte";

test("render default", async () => {
  const handler = vi.fn();

  const result = render(ListItemView, {
    title: "test",
    disabled: false,
    selected: false,
    active: false,
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
    selected: false,
    active: false,
  });

  result.component.$on("click", handler);

  const item = screen.getByText("test");

  expect(item).toBeInTheDocument();

  await fireEvent.click(item);
  expect(handler).not.toHaveBeenCalled();
});

test("render selected element", () => {
  render(ListItemView, {
    title: "test",
    disabled: false,
    selected: true,
    selectionVariant: "single",
    active: false,
  });

  const selectableField = screen.getByTestId("selectable-place");
  expect(selectableField).toBeInTheDocument();
});

test("render leading icon element", () => {
  render(ListItemView, {
    title: "test",
    disabled: false,
    selected: false,
    active: false,
    leadingIcon: "alert",
  });

  const leadPlace = screen.getByTestId("lead-place");
  expect(leadPlace).toBeInTheDocument();
});

test("render trailing icon element", () => {
  render(ListItemView, {
    title: "test",
    disabled: false,
    selected: false,
    active: false,
    trailingIcon: "arrow-right",
  });

  const trailPlace = screen.getByTestId("trail-place");
  expect(trailPlace).toBeInTheDocument();
});

test("render inline description", () => {
  render(ListItemView, {
    title: "test",
    inlineDescription: "description",
    disabled: false,
    selected: false,
    active: false,
  });

  const inlineDescriptionPlace = screen.getByTestId("inline-description");
  expect(inlineDescriptionPlace).toBeInTheDocument();
});
