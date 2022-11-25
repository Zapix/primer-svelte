import type { IconName } from "@primer/octicons";

import Octicon from "./Octicon.svelte";
import type { SizeName } from "./utils";
import { iconTypes, sizeTypes } from "./constants";

export default {
  title: "Primer/Octicon",
  component: Octicon,
  argTypes: {
    iconType: {
      control: {
        type: "select",
        options: iconTypes,
      },
    },
    size: {
      control: {
        type: "select",
        options: sizeTypes,
      },
    },
    fill: { control: "text" },
    verticalAlign: { control: "text" },
    tabIndex: { control: "number" },
    onClick: { action: "onClick" },
    ariaLabel: { control: "text" },
  },
  args: {
    iconType: iconTypes[0],
    size: sizeTypes[0],
    fill: "black",
    verticalAlign: "text-top",
    tabIndex: -1,
    ariaLabel: "",
  },
};

type ArgTypes = {
  iconType: IconName;
  size: SizeName;
  fill: string;
  verticalAlign: string;
  tabIndex?: number;
  onClick: (event: Event) => void;
};

const Template = (args: ArgTypes) => ({
  Component: Octicon,
  props: args,
  on: {
    click: args.onClick,
  },
});

/* eslint-disable */
export const Default = Template.bind({});
/* eslint-enable */
