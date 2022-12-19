import _ from "lodash/fp/__";
import get from "lodash/fp/get";

import { getColor, getFonts, getFontSize, getRadii, getSpace } from "../theme";
import type { ItemStyles, ItemVariant } from "./types";

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

export const getStyle = get(_, styles);
