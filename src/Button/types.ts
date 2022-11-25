export type ButtonType = "button" | "submit";

export type ButtonVariant =
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
  hoverCounterBg: string;

  activeBg: string;
  activeBorder: string;

  selectedText: string;
  selectedBg: string;
  selectedBorder: string;
  selectedShadow: string;

  disabledText: string;
  disabledBg: string;
  disabledBorder: string;

  focusText: string;
  focusBg: string;
  focusBorder: string;
  focusShadow: string;

  icon: string;
  hoverIcon: string;
  counterBg: string;
  shadowActive: string;
  shadowInputFocus: string;
};

export type ButtonSize = "medium" | "large" | "small";
