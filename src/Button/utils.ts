import { getColor } from "../theme";

const buttonStyles = {
  default: {
    text: getColor(["btn", "text"]),
    bg: getColor(["btn", "bg"]),
    border: getColor(["btn", "border"]),
    shadow: getColor(["btn", "shadow"]),
    insetShadow: getColor(["btn", "insetShadow"]),
    disabledText: getColor(["btn", "text"]),
    disabledBg: getColor(["btn", "bg"]),
    disabledBorder: getColor(["btn", "border"]),
    hoverText: getColor(["btn", "text"]),
    hoverBg: getColor(["btn", "hoverBg"]),
    hoverBorder: getColor(["btn", "hoverBorder"]),
    activeBg: getColor(["btn", "activeBg"]),
    activeBorder: getColor(["btn", "activeBorder"]),
    selectedBg: getColor(["btn", "selectedBg"]),
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
