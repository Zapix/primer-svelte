import { getColor } from "../theme";

const buttonStyles = {
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

    focusBg: getColor(["btn", "focusBg"]),
    focusBorder: getColor(["btn", "focusBorder"]),
    focusShadow: getColor(["btn", "focusShadow"]),

    icon: getColor(["btn", "text"]),
    counterBg: getColor(["btn", "counterBg"]),
    shadowActive: getColor(["btn", "shadowActive"]),
    shadowInputFocus: getColor(["btn", "shadowInputFocus"]),
  },
};

export const getBtnStyle = () => buttonStyles.default;
