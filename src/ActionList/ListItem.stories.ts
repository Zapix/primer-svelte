import ListItemView from "./ListItemView.svelte";

export default {
  title: "Primer/ActionList/ListItem",
  component: ListItemView,
  argTypes: {
    title: { control: "text" },
    disabled: { control: "boolean" },
    onClick: { action: "onClick" },
  },
};

type ArgsType = {
  title: string;
  disabled: boolean;
  onClick: (event: Event) => void;
};

const Template = (args: ArgsType) => ({
  Component: ListItemView,
  props: args,
  on: {
    click: args.onClick,
  },
});

/* eslint-disable */
export const Default = Template.bind({});
Default.args = {
  title: "Action list item",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "Action list item",
  disabled: true,
};
/* eslint-enable */
