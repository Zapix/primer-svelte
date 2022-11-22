import ButtonView from "./ButtonView.svelte";
import type { ButtonSize } from "./types";

export default {
  title: "Primer/Button",
  component: ButtonView,
  argTypes: {
    tabIndex: { control: "number" },
    title: { control: "text" },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    disabled: { control: "boolean" },
    onClick: { action: "onClick" },
  },
};

type ArgsType = {
  title: string;
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
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  title: "This is button",
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  title: "This is button",
  size: "small",
};
/* eslint-enable */
