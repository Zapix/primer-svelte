import ListItemView from "./ListItemView.svelte";
import type { ItemVariant, SelectionVariant } from "./types";

export default {
  title: "Primer/ActionList/ListItem",
  component: ListItemView,
  argTypes: {
    title: { control: "text" },
    selectionVariant: {
      control: {
        type: "select",
        options: ["none", "single", "multiple"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["default", "danger"],
      },
    },
    disabled: { control: "boolean" },
    selected: { control: "boolean" },
    onClick: { action: "onClick" },
  },
};

type ArgsType = {
  title: string;
  selectionVariant: SelectionVariant;
  variant: ItemVariant;
  disabled: boolean;
  selected: boolean;
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
  selectionVariant: "none",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "Action list item",
  selectionVariant: "none",
  disabled: true,
};

export const Danger = Template.bind({});
Danger.args = {
  title: "Action list item",
  selectionVariant: "none",
  variant: "danger",
};

export const Selectable = Template.bind({});
Selectable.args = {
  title: "Action list item",
  selectionVariant: "single",
  disabled: false,
  selected: true,
};
/* eslint-enable */
