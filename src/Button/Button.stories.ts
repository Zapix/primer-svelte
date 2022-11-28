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
    trailingIcon: {
      control: {
        type: "select",
        options: iconTypes,
      },
    },
    counter: { control: "number" },
    block: { control: "boolean" },
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
  trailingIcon: null | IconName;
  counter: number;
  block: boolean;
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

export const BlockButton = Template.bind({});
BlockButton.args = {
  title: "This is button",
  variant: "default",
  type: "button",
  size: "medium",
  block: true,
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

export const WithTrailingIcon = Template.bind({});
WithTrailingIcon.args = {
  title: "This is button",
  variant: "default",
  type: "button",
  size: "medium",
  trailingIcon: "triangle-down",
};

export const WithBothIcons = Template.bind({});
WithBothIcons.args = {
  title: "This is button",
  variant: "default",
  type: "button",
  size: "medium",
  leadingIcon: "search",
  trailingIcon: "triangle-down",
};

export const WithCounter = Template.bind({});
WithCounter.args = {
  title: "This is button",
  variant: "default",
  counter: 12,
};

export const WithCounterAndIcons = Template.bind({});
WithCounterAndIcons.args = {
  title: "This is button",
  variant: "default",
  leadingIcon: "search",
  trailingIcon: "triangle-down",
  counter: 12,
};

export const Primary = Template.bind({});
Primary.args = {
  title: "This is primary",
  variant: "primary",
  type: "button",
  size: "medium",
};

export const BlockPrimary = Template.bind({});
BlockPrimary.args = {
  title: "This is primary",
  variant: "primary",
  type: "button",
  size: "medium",
  block: true,
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

export const PrimaryWithTrailingIcon = Template.bind({});
PrimaryWithTrailingIcon.args = {
  title: "This is primary",
  variant: "primary",
  type: "button",
  trailingIcon: "triangle-down",
};

export const PrimaryWithBothIcons = Template.bind({});
PrimaryWithBothIcons.args = {
  title: "This is primary",
  variant: "primary",
  type: "button",
  leadingIcon: "check",
  trailingIcon: "triangle-down",
};

export const PrimaryWithCounter = Template.bind({});
PrimaryWithCounter.args = {
  title: "This is primary",
  variant: "primary",
  type: "button",
  counter: 15,
};

export const PrimaryWithCounterAndIcons = Template.bind({});
PrimaryWithCounterAndIcons.args = {
  title: "This is priamry",
  variant: "primary",
  type: "button",
  leadingIcon: "check",
  trailingIcon: "triangle-down",
  counter: 15,
};

export const Outline = Template.bind({});
Outline.args = {
  title: "This is outline",
  variant: "outline",
  type: "button",
  size: "medium",
};

export const BlockOutline = Template.bind({});
BlockOutline.args = {
  title: "This is outline",
  variant: "outline",
  type: "button",
  size: "medium",
  block: true,
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

export const OutlineWithTrailingIcon = Template.bind({});
OutlineWithTrailingIcon.args = {
  title: "This is outline",
  variant: "outline",
  type: "button",
  trailingIcon: "triangle-down",
};

export const OutlineWithBothIcons = Template.bind({});
OutlineWithBothIcons.args = {
  title: "This is outline",
  variant: "outline",
  type: "button",
  leadingIcon: "search",
  trailingIcon: "triangle-down",
};

export const OutlineWithCounter = Template.bind({});
OutlineWithCounter.args = {
  title: "This is outline",
  variant: "outline",
  type: "button",
  counter: 15,
};

export const OutlineWithCounterAndIcons = Template.bind({});
OutlineWithCounterAndIcons.args = {
  title: "This is outline",
  variant: "outline",
  type: "button",
  counter: 15,
  leadingIcon: "search",
  trailingIcon: "triangle-down",
};

export const Danger = Template.bind({});
Danger.args = {
  title: "This is danger",
  variant: "danger",
  type: "button",
  size: "medium",
};

export const BlockDanger = Template.bind({});
BlockDanger.args = {
  title: "This is danger",
  variant: "danger",
  type: "button",
  size: "medium",
  block: true,
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

export const DangerWithTrailingIcon = Template.bind({});
DangerWithTrailingIcon.args = {
  title: "This is danger",
  variant: "danger",
  type: "button",
  trailingIcon: "triangle-down",
};

export const DangerWithBothIcons = Template.bind({});
DangerWithBothIcons.args = {
  title: "This is danger",
  variant: "danger",
  type: "button",
  leadingIcon: "alert",
  trailingIcon: "triangle-down",
};

export const DangerWithCounter = Template.bind({});
DangerWithCounter.args = {
  title: "This is danger",
  variant: "danger",
  type: "button",
  counter: 3,
};

export const DangerWithCounterAndIcons = Template.bind({});
DangerWithCounterAndIcons.args = {
  title: "This is danger",
  variant: "danger",
  type: "button",
  leadingIcon: "alert",
  trailingIcon: "triangle-down",
  counter: 3,
};

export const Invisible = Template.bind({});
Invisible.args = {
  title: "This is invisible",
  variant: "invisible",
  type: "button",
  size: "medium",
};

export const BlockInvisible = Template.bind({});
BlockInvisible.args = {
  title: "This is invisible",
  variant: "invisible",
  type: "button",
  size: "medium",
  block: true,
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

export const InvisibleWithTrailingIcon = Template.bind({});
InvisibleWithTrailingIcon.args = {
  title: "This is invisible",
  variant: "invisible",
  type: "button",
  trailingIcon: "triangle-down",
};

export const InvisibleWithBothIcons = Template.bind({});
InvisibleWithBothIcons.args = {
  title: "This is invisible",
  variant: "invisible",
  type: "button",
  leadingIcon: "search",
  trailingIcon: "triangle-down",
};

export const InvisibleWithCounter = Template.bind({});
InvisibleWithCounter.args = {
  title: "This is invisible",
  variant: "invisible",
  type: "button",
  counter: 44,
};

export const InvisibleWithCounterAndIcons = Template.bind({});
InvisibleWithCounterAndIcons.args = {
  title: "This is invisible",
  variant: "invisible",
  type: "button",
  counter: 44,
  leadingIcon: "search",
  trailingIcon: "triangle-down",
};
/* eslint-enable */
