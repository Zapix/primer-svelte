import __ from "lodash/fp/__";
import get from "lodash/fp/get";
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

const fontWeights = {
  light: 300,
  normal: 400,
  semibold: 500,
  bold: 600,
};

export const getFonts = get(__, fonts);

export const getColor = get(__, primitives.colors.light);

export const getFontWeight = get(__, fontWeights);
