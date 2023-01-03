import ListItemView from "./ListItemView.svelte";
import type { ItemSize, ItemVariant, SelectionVariant } from "./types";
import { iconTypes } from "../Octicon/constants";
import type { IconName } from "@primer/octicons";

export default {
  title: "Primer/ActionList/ListItem",
  component: ListItemView,
  argTypes: {
    title: { control: "text" },
    inlineDescription: { control: "text" },
    blockDescription: { control: "text" },
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
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    active: { control: "boolean" },
    disabled: { control: "boolean" },
    selected: { control: "boolean" },
    onClick: { action: "onClick" },
    leadingIcon: {
      control: {
        type: "select",
        options: [undefined, ...iconTypes],
      },
    },
    trailingIcon: {
      control: {
        type: "select",
        options: [undefined, ...iconTypes],
      },
    },
  },
};

type ArgsType = {
  title: string;
  inlineDescription: string;
  selectionVariant: SelectionVariant;
  variant: ItemVariant;
  size: ItemSize;
  active: boolean;
  disabled: boolean;
  selected: boolean;
  leadingIcon: IconName | undefined;
  trailingIcon: IconName | undefined;
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
  active: false,
};

export const Active = Template.bind({});
Active.args = {
  title: "Action list item",
  selectionVariant: "none",
  active: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "Action list item",
  selectionVariant: "none",
  active: false,
  disabled: true,
};

export const Danger = Template.bind({});
Danger.args = {
  title: "Action list item",
  selectionVariant: "none",
  variant: "danger",
  active: false,
};

export const Selectable = Template.bind({});
Selectable.args = {
  title: "Action list item",
  selectionVariant: "single",
  active: false,
  disabled: false,
  selected: true,
};

export const LeadingIcon = Template.bind({});
LeadingIcon.args = {
  title: "Action list item",
  selectionVariant: "none",
  disabled: false,
  active: false,
  leadingIcon: "arrow-right",
};

export const TrailingIcon = Template.bind({});
TrailingIcon.args = {
  title: "Action list item",
  selectionVariant: "none",
  disabled: false,
  active: false,
  trailingIcon: "arrow-right",
};

export const LeadingAndTrailingIcon = Template.bind({});
LeadingAndTrailingIcon.args = {
  title: "Action list item",
  selectionVariant: "none",
  disabled: false,
  active: false,
  leadingIcon: "gear",
  trailingIcon: "arrow-right",
};

export const WithInlineDescription = Template.bind({});
WithInlineDescription.args = {
  title: "Action list item",
  inlineDescription: "Hello world! Make code not war",
};

export const WithBlockDescription = Template.bind({});
WithBlockDescription.args = {
  title: "Action list item",
  blockDescription: "Hello world! Make code not war",
};
/* eslint-enable */
