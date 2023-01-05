import MultipleSelectList from "./MultipleSelectList.svelte";

export default {
  title: "Primer/ActionList/Examples/Multiple Select List",
  component: MultipleSelectList,
  argTypes: {
    onSelect: { action: "onSelect" },
  },
};

type ArgsType = {
  options: Array<{ id: number; title: string }>;
  onSelect: (event: Event) => void;
};

const Template = (args: ArgsType) => ({
  Component: MultipleSelectList,
  props: args,
  on: {
    select: args.onSelect,
  },
});

/* eslint-disable */
export const Default = Template.bind({});
Default.args = {
  options: [
    { id: 1, title: "option 1" },
    { id: 2, title: "option 2" },
    { id: 3, title: "option 3" },
    { id: 4, title: "option 4" },
  ],
};
/* eslint-enable */
