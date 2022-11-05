import { fontStack } from "./theme";

describe("fontStack", () => {
  test("stack", () => {
    expect(
      fontStack(["-apple-system", "BlinkMacSystemFont", "Segoe UI"])
    ).toEqual('-apple-system, BlinkMacSystemFont, "Segoe UI"');
  });
});
