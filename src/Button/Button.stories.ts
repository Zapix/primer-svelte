import ButtonView from "./ButtonView.svelte";

export default {
  title: "Primer/Button",
  component: ButtonView,
  argTypes: {
    tabIndex: { control: "number" },
    title: { control: "text" },
    disabled: { control: "boolean" },
    onClick: { action: "onClick" },
  },
};

type ArgsType = {
  title: string;
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
};
/* eslint-enable */
