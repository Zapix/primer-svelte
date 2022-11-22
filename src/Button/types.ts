export type ButtonType =
  | "default"
  | "primary"
  | "outline"
  | "danger"
  | "invisible";

export type ButtonStyle = {
  text: string;
  bg: string;
  border: string;
  shadow: string;
  insetShadow: string;
  hoverText: string;
  hoverBg: string;
  hoverBorder: string;
  activeBg: string;
  activeBorder: string;
  selectedBg: string;
  disabledText: string;
  disabledBg: string;
  disabledBorder: string;
  focusBg: string;
  focusBorder: string;
  focusShadow: string;
  icon: string;
  counterBg: string;
  shadowActive: string;
  shadowInputFocus: string;
};

export type ButtonSize = "medium" | "large" | "small";
