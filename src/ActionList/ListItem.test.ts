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
    divider: false,
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
    divider: false,
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
    divider: false,
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
    divider: false,
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
    divider: false,
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
    divider: false,
  });

  const inlineDescriptionPlace = screen.getByTestId("inline-description");
  expect(inlineDescriptionPlace).toBeInTheDocument();
});

test("render block description", () => {
  render(ListItemView, {
    title: "test",
    blockDescription: "description",
    disabled: false,
    selected: false,
    active: false,
    divider: false,
  });

  const blockDescriptionPlace = screen.getByTestId("block-description");
  expect(blockDescriptionPlace).toBeInTheDocument();
});
