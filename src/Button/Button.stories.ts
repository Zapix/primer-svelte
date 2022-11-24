import ButtonView from "./ButtonView.svelte";
import type { ButtonSize, ButtonType, ButtonVariant } from "./types";

export default {
  title: "Primer/Button",
  component: ButtonView,
  argTypes: {
    title: { control: "text" },
    variant: {
      control: "select",
      options: ["default", "primary"],
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
/* eslint-enable */
