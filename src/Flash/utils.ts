import _ from "lodash/fp/__";
import getOr from "lodash/fp/getOr";
import { getColor } from "../theme";
import type { FlashStyles, FlashVariant } from "./types";

const styles: Record<FlashVariant, FlashStyles> = {
  default: {
    color: getColor(["fg", "default"]),
    backgroundColor: getColor(["accent", "subtle"]),
    borderColor: getColor(["accent", "muted"]),
    svg: {
      color: getColor(["accent", "fg"]),
    },
  },
  success: {
    color: getColor(["fg", "default"]),
    backgroundColor: getColor(["success", "subtle"]),
    borderColor: getColor(["success", "muted"]),
    svg: {
      color: getColor(["success", "fg"]),
    },
  },
  warning: {
    color: getColor(["fg", "default"]),
    backgroundColor: getColor(["attention", "subtle"]),
    borderColor: getColor(["attention", "muted"]),
    svg: {
      color: getColor(["attention", "fg"]),
    },
  },
  danger: {
    color: getColor(["fg", "default"]),
    backgroundColor: getColor(["danger", "subtle"]),
    borderColor: getColor(["danger", "muted"]),
    svg: {
      color: getColor(["danger", "fg"]),
    },
  },
};

export const getStyle = getOr(styles.default, _, styles);
