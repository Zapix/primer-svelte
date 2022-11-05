import get from "lodash/get";
import partial from "lodash/partial";
import { fontStack } from "./utils/theme";
import primitives from "@primer/primitives";

const fonts = {
  normal: fontStack([
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
  ]),
  mono: fontStack([
    "SFMono-Regular",
    "Consolas",
    "Liberation Mono",
    "Menlo",
    "Courier",
    "monospace",
  ]),
};

export const getFonts: (fontType: string) => string = partial(get, fonts);

export const getColor: (value: string) => string = partial(
  get,
  primitives.colors.light
);
