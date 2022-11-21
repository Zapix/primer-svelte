import Flash from "./Flash.svelte";
import type { FlashVariant } from "./types";

export default {
  title: "Primer/Flash",
  component: Flash,
  argTypes: {
    icon: { control: "boolean" },
    title: { control: "text" },
    variant: {
      control: {
        type: "select",
        options: ["default", "success", "warning", "danger"],
      },
    },
    dismissible: { control: "boolean" },
    onDismiss: { action: "onDismiss" },
  },
};

type ArgsType = {
  title: string;
  variant: FlashVariant;
  dismissible: boolean;
  onDismiss: (event: Event) => void;
};

const Template = (args: ArgsType) => ({
  Component: Flash,
  props: args,
  on: {
    dismiss: args.onDismiss,
  },
});

/* eslint-disable */
export const Default = Template.bind({});
Default.args = {
  title: "Default message",
};

export const Success = Template.bind({});
Success.args = {
  title: "Success message",
  variant: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  title: "Warning Message",
  variant: "warning",
};

export const Danger = Template.bind({});
Danger.args = {
  title: "Danger message",
  variant: "danger",
};

export const DismissibleDanger = Template.bind({});
DismissibleDanger.args = {
  title: "Danger message! Close me!",
  variant: "danger",
  dismissible: true,
};
/* eslint-enable */
