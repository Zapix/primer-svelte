import type { IconName } from "@primer/octicons";

import { iconTypes } from "../Octicon/constants";

import ButtonView from "./ButtonView.svelte";
import type { ButtonSize, ButtonType, ButtonVariant } from "./types";

export default {
  title: "Primer/Button",
  component: ButtonView,
  argTypes: {
    title: { control: "text" },
    variant: {
      control: "select",
      options: ["default", "primary", "outline", "danger", "invisible"],
    },
    type: {
      control: {
        type: "select",
        options: ["button", "submit"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    tabIndex: { control: "number" },
    disabled: { control: "boolean" },
    selected: { control: "boolean" },
    leadingIcon: {
      control: {
        type: "select",
        options: iconTypes,
      },
    },
    onClick: { action: "onClick" },
  },
};

type ArgsType = {
  title: string;
  variant: ButtonVariant;
  type: ButtonType;
  size: ButtonSize;
  tabIndex: number;
  disabled: boolean;
  leadingIcon: null | IconName;
  onClick: (event: Event) => void;
};

const Template = (args: ArgsType) => ({
  Component: ButtonView,
  props: args,
  on: {
    click: args.onClick,
  },
});

/* eslint-disable */
export const Default = Template.bind({});
Default.args = {
  title: "This is button",
  variant: "default",
  type: "button",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  title: "This is button",
  variant: "default",
  type: "button",
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  title: "This is button",
  variant: "default",
  type: "button",
  size: "small",
};

export const WithLeadingIcon = Template.bind({});
WithLeadingIcon.args = {
  title: "This is button",
  variant: "default",
  type: "button",
  size: "medium",
  leadingIcon: "search",
};

export const Primary = Template.bind({});
Primary.args = {
  title: "This is primary",
  variant: "primary",
  type: "button",
  size: "medium",
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  title: "This is primary",
  variant: "primary",
  type: "button",
  size: "large",
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  title: "This is primary",
  variant: "primary",
  type: "button",
  size: "small",
};

export const PrimaryWithLeadingIcon = Template.bind({});
PrimaryWithLeadingIcon.args = {
  title: "This is primary",
  variant: "primary",
  type: "button",
  leadingIcon: "check",
};

export const Outline = Template.bind({});
Outline.args = {
  title: "This is outline",
  variant: "outline",
  type: "button",
  size: "medium",
};

export const OutlineLarge = Template.bind({});
OutlineLarge.args = {
  title: "This is outline",
  variant: "outline",
  type: "button",
  size: "large",
};

export const OutlineSmall = Template.bind({});
OutlineSmall.args = {
  title: "This is outline",
  variant: "outline",
  type: "button",
  size: "small",
};

export const OutlineWithLeadingIcon = Template.bind({});
OutlineWithLeadingIcon.args = {
  title: "This is outline",
  variant: "outline",
  type: "button",
  leadingIcon: "search",
};

export const Danger = Template.bind({});
Danger.args = {
  title: "This is danger",
  variant: "danger",
  type: "button",
  size: "medium",
};

export const DangerLarge = Template.bind({});
DangerLarge.args = {
  title: "This is danger",
  variant: "danger",
  type: "button",
  size: "large",
};

export const DangerSmall = Template.bind({});
DangerSmall.args = {
  title: "This is danger",
  variant: "danger",
  type: "button",
  size: "small",
};

export const DangerWithLeadingIcon = Template.bind({});
DangerWithLeadingIcon.args = {
  title: "This is danger",
  variant: "danger",
  type: "button",
  leadingIcon: "alert",
};

export const Invisible = Template.bind({});
Invisible.args = {
  title: "This is invisible",
  variant: "invisible",
  type: "button",
  size: "medium",
};

export const InvisibleLarge = Template.bind({});
InvisibleLarge.args = {
  title: "This is invisible",
  variant: "invisible",
  type: "button",
  size: "large",
};

export const InvisibleSmall = Template.bind({});
InvisibleSmall.args = {
  title: "This is invisible",
  variant: "invisible",
  type: "button",
  size: "small",
};

export const InvisibleWithLeadingIcon = Template.bind({});
InvisibleWithLeadingIcon.args = {
  title: "This is invisible",
  variant: "invisible",
  type: "button",
  leadingIcon: "search",
};
/* eslint-enable */
