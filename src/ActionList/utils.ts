import _ from "lodash/fp/__";
import get from "lodash/fp/get";
import getOr from "lodash/fp/getOr";

import { getColor, getFonts, getFontSize, getRadii, getSpace } from "../theme";
import type { ItemStyles, ItemVariant, ItemSize } from "./types";

const styles: Record<ItemVariant, ItemStyles> = {
  default: {
    fontFamily: getFonts("normal"),
    fontSize: getFontSize(1),
    fontColor: getColor(["fg", "default"]),
    disabledFontColor: getColor(["fg", "muted"]),
    paddingX: getSpace(2),
    radius: getRadii(2),
    bg: "unset",
    hoverBg: getColor(["actionListItem", "default", "hoverBg"]),
    disabledHoverBg: "none",
  },
  danger: {
    fontFamily: getFonts("normal"),
    fontSize: getFontSize(1),
    fontColor: getColor(["actionListItem", "danger", "hoverText"]),
    disabledFontColor: getColor(["actionListItem", "danger", "hoverText"]),
    paddingX: getSpace(2),
    radius: getRadii(2),
    bg: "unset",
    hoverBg: getColor(["actionListItem", "danger", "hoverBg"]),
    disabledHoverBg: "none",
  },
};

const sizes: Record<ItemSize, string> = {
  small: "32px",
  medium: "40px",
  large: "48px",
};

export const getStyle = get(_, styles);

export const getSize = getOr(sizes.small, _, sizes);
