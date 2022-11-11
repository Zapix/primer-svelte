import "@testing-library/jest-dom";
import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/svelte";

import Octicon from "./Octicon.svelte";

test("render default", () => {
  render(Octicon, {
    iconType: "alert",
    size: "small",
    tabIndex: -1,
  });
  const octicon = screen.getByTestId("octicon");

  expect(octicon).toBeInTheDocument();
});

test("clickable", async () => {
  const handler = vi.fn();
  const results = render(Octicon, {
    iconType: "x",
    size: "medium",
    tabIndex: 1,
  });
  results.component.$on("click", handler);

  const octicon = screen.getByTestId("octicon");
  await fireEvent.click(octicon);

  expect(handler).toHaveBeenCalled();
});
