import octicons from "@primer/octicons";
import Octicon from "./Octicon.svelte";

const iconTypes = <octicons.IconName[]>Array.from(Object.keys(octicons));

export default {
  title: "Primer/Octicon",
  component: Octicon,
  argTypes: {
    iconType: {
      control: {
        type: "select",
        options: Array.from(Object.keys(octicons)),
      },
    },
  },
  args: {
    iconType: iconTypes[0],
  },
};

type ArgTypes = {
  iconType: octicons.IconName;
};

const Template = (args: ArgTypes) => ({
  Component: Octicon,
  props: args,
});

/* eslint-disable */
export const Default = Template.bind({});
/* eslint-enable */
