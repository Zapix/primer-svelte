import ButtonGroupView from "./ButtonGroupView.svelte";

export default {
  title: "Primer/ButtonGroup",
  component: ButtonGroupView,
  argTypes: {
    firstTitle: { control: "text" },
    secondTitle: { control: "text" },
    thirdTitle: { control: "text" },
    onButtonClick: { action: "onButtonClick" },
  },
};

type ArgsType = {
  firstTitle: string;
  secondTitle: string;
  thirdTitle: string;
  onButtonClick: (Event) => void;
};

const Template = (args: ArgsType) => ({
  Component: ButtonGroupView,
  props: args,
  on: {
    buttonClick: args.onButtonClick,
  },
});

/* eslint-disable */
export const Default = Template.bind({});
Default.args = {
  firstTitle: "First",
  secondTitle: "Second",
  thirdTitle: "Third",
};
/* eslint-enable */
