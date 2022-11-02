import Button from "./Button.svelte";
import type { ButtonSize } from "./Button.svelte";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    onClick: { action: "onClick" },
    primary: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

type ArgsType = {
  backgroundColor: string;
  label: string;
  onClick: (event: Event) => void;
  primary: boolean;
  size: ButtonSize;
};

/* eslint-disable */
// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args: ArgsType) => ({
  Component: Button,
  props: args,
  on: {
    click: args.onClick,
  },
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
/* eslint-enable */
