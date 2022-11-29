import "@testing-library/jest-dom";
import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/svelte";
import ButtonGroupView from "./ButtonGroupView.svelte";

test.each(["first", "second", "third"])("handle %s clicked", async (title) => {
  const handler = vi.fn();
  const result = render(ButtonGroupView, {
    firstTitle: "first",
    secondTitle: "second",
    thirdTitle: "third",
  });

  result.component.$on("buttonClick", handler);

  const button = screen.getByText(title);
  expect(button).toBeInTheDocument();

  await fireEvent.click(button);
  expect(handler).toHaveBeenCalled();
});
