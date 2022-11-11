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
    tabIndex: { control: "number" },
    onClick: { action: "onClick" },
  },
  args: {
    iconType: iconTypes[0],
    size: sizeTypes[0],
  },
};

type ArgTypes = {
  iconType: octicons.IconName;
  size: SizeName;
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
