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
  },
  args: {
    iconType: iconTypes[0],
    size: sizeTypes[0],
  },
};

type ArgTypes = {
  iconType: octicons.IconName;
  size: SizeName;
};

const Template = (args: ArgTypes) => ({
  Component: Octicon,
  props: args,
});

/* eslint-disable */
export const Default = Template.bind({});
/* eslint-enable */
