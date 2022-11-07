import octicons from "@primer/octicons";
import { getSize, getIconHeights, closestNaturalHeight } from "./utils";
import type { SizeName } from "./utils";
import type { IconSize } from "@primer/octicons";

describe("getSize", () => {
  test.each([
    {
      label: "small",
      expected: 16,
    },
    {
      label: "medium",
      expected: 32,
    },
    {
      label: "large",
      expected: 64,
    },
  ])("$label", ({ label, expected }) => {
    expect(getSize(label as SizeName)).toEqual(expected);
  });
});

describe("getIconHeights", () => {
  test("alert icon", () => {
    expect(getIconHeights(octicons.alert)).toEqual([16, 24]);
  });
});

describe("closestNaturalHeight", () => {
  test.each([
    {
      value: 16,
      expected: 16,
      heights: [12, 16, 24],
    },
    {
      value: 32,
      expected: 24,
      heights: [12, 16, 24],
    },
  ])("$value expected $expected", ({ value, expected, heights }) => {
    expect(closestNaturalHeight(heights as IconSize[], value)).toEqual(
      expected
    );
  });
});
