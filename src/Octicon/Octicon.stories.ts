import octicons from "@primer/octicons";
import Octicon from "./Octicon.svelte";
import { sizeMap } from "./utils";
import type { SizeName } from "./utils";

const iconTypes = Array.from(Object.keys(octicons)) as octicons.IconName[];
const sizeTypes = Array.from(Object.keys(sizeMap)) as SizeName[];

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
    tabIndex: { control: "number" },
    onClick: { action: "onClick" },
    ariaLabel: { control: "text" },
  },
  args: {
    iconType: iconTypes[0],
    size: sizeTypes[0],
    fill: "black",
    tabIndex: -1,
    ariaLabel: "",
  },
};

type ArgTypes = {
  iconType: octicons.IconName;
  size: SizeName;
  fill: string;
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
