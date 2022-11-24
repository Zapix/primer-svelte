import _ from "lodash/fp/__";
import get from "lodash/fp/get";

import { getColor } from "../theme";
import type { ButtonStyle, ButtonVariant } from "./types";

const buttonStyles: Record<ButtonVariant, ButtonStyle> = {
  default: {
    text: getColor(["btn", "text"]),
    bg: getColor(["btn", "bg"]),
    border: getColor(["btn", "border"]),
    shadow: getColor(["btn", "shadow"]),
    insetShadow: getColor(["btn", "insetShadow"]),

    disabledText: "#959DA5",
    disabledBg: getColor(["btn", "bg"]),
    disabledBorder: getColor(["btn", "border"]),

    hoverText: getColor(["btn", "text"]),
    hoverBg: getColor(["btn", "hoverBg"]),
    hoverBorder: getColor(["btn", "hoverBorder"]),

    activeBg: getColor(["btn", "activeBg"]),
    activeBorder: getColor(["btn", "activeBorder"]),

    selectedText: getColor(["btn", "text"]),
    selectedBg: getColor(["btn", "selectedBg"]),
    selectedBorder: getColor(["btn", "border"]),
    selectedShadow: getColor(["btn", "shadowActive"]),

    focusText: getColor(["btn", "text"]),
    focusBg: getColor(["btn", "focusBg"]),
    focusBorder: getColor(["btn", "focusBorder"]),
    focusShadow: getColor(["btn", "focusShadow"]),

    icon: getColor(["btn", "text"]),
    counterBg: getColor(["btn", "counterBg"]),
    shadowActive: getColor(["btn", "shadowActive"]),
    shadowInputFocus: getColor(["btn", "shadowInputFocus"]),
  },
  primary: {
    text: getColor(["btn", "primary", "text"]),
    bg: getColor(["btn", "primary", "bg"]),
    border: getColor(["btn", "primary", "border"]),
    shadow: getColor(["btn", "primary", "shadow"]),
    insetShadow: getColor(["btn", "primary", "insetShadow"]),

    disabledText: getColor(["btn", "primary", "disabledText"]),
    disabledBg: getColor(["btn", "primary", "disabledBg"]),
    disabledBorder: getColor(["btn", "primary", "disabledBorder"]),

    hoverText: getColor(["btn", "primary", "text"]),
    hoverBg: getColor(["btn", "primary", "hoverBg"]),
    hoverBorder: getColor(["btn", "primary", "hoverBorder"]),

    activeBg: getColor(["btn", "primary", "selectedBg"]),
    activeBorder: getColor(["btn", "primary", "border"]),

    selectedText: getColor(["btn", "primary", "text"]),
    selectedBg: getColor(["btn", "primary", "selectedBg"]),
    selectedBorder: getColor(["btn", "primary", "border"]),
    selectedShadow: getColor(["btn", "primary", "selectedShadow"]),

    focusText: getColor(["btn", "primary", "text"]),
    focusBg: getColor(["btn", "primary", "focusBg"]),
    focusBorder: getColor(["btn", "primary", "focusBorder"]),
    focusShadow: getColor(["btn", "primary", "focusShadow"]),

    icon: getColor(["btn", "primary", "text"]),
    counterBg: getColor(["btn", "primary", "counterBg"]),
    shadowActive: getColor(["btn", "primary", "shadow"]),
    shadowInputFocus: getColor(["btn", "primary", "insetShadow"]),
  },
  outline: {
    text: getColor(["btn", "outline", "text"]),
    bg: getColor(["btn", "bg"]),
    border: getColor(["btn", "border"]),
    shadow: getColor(["btn", "shadow"]),
    insetShadow: getColor(["btn", "insetShadow"]),

    disabledText: getColor(["btn", "outline", "disabledText"]),
    disabledBg: getColor(["btn", "outline", "disabledBg"]),
    disabledBorder: getColor(["btn", "border"]),

    hoverText: getColor(["btn", "outline", "hoverText"]),
    hoverBg: getColor(["btn", "outline", "hoverBg"]),
    hoverBorder: getColor(["btn", "outline", "hoverBorder"]),

    activeBg: getColor(["btn", "outline", "selectedBg"]),
    activeBorder: getColor(["btn", "outline", "selectedBorder"]),

    selectedText: getColor(["btn", "outline", "selectedText"]),
    selectedBg: getColor(["btn", "outline", "selectedBg"]),
    selectedBorder: getColor(["btn", "outline", "selectedBorder"]),
    selectedShadow: getColor(["btn", "outline", "selectedShadow"]),

    focusText: getColor(["btn", "outline", "text"]),
    focusBg: getColor(["btn", "focusBg"]),
    focusBorder: getColor(["btn", "outline", "focusBorder"]),
    focusShadow: getColor(["btn", "outline", "focusShadow"]),

    icon: getColor(["btn", "outline", "text"]),
    counterBg: getColor(["btn", "outline", "counterBg"]),
    shadowActive: getColor(["btn", "shadowActive"]),
    shadowInputFocus: getColor(["btn", "shadowInputFocus"]),
  },
};

export const getBtnStyle = get(_, buttonStyles);
