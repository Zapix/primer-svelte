import ButtonView from "./ButtonView.svelte";
import type { ButtonSize, ButtonType } from "./types";

export default {
  title: "Primer/Button",
  component: ButtonView,
  argTypes: {
    title: { control: "text" },
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
  type: "button",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  title: "This is button",
  type: "button",
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  title: "This is button",
  type: "button",
  size: "small",
};
/* eslint-enable */
