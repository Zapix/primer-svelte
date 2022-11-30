import FlashView from "./FlashView.svelte";
import type { FlashVariant } from "./types";

export default {
  title: "Primer/Flash",
  component: FlashView,
  argTypes: {
    icon: { control: "boolean" },
    title: { control: "text" },
    variant: {
      control: {
        type: "select",
        options: ["default", "success", "warning", "danger"],
      },
    },
    full: { control: "boolean" },
    banner: { control: "boolean" },
    dismissible: { control: "boolean" },
    onDismiss: { action: "onDismiss" },
    button: { action: "boolean" },
    onButtonClick: { action: "onButtonClick" },
  },
};

type ArgsType = {
  title: string;
  variant: FlashVariant;
  full: boolean;
  banner: boolean;
  dismissible: boolean;
  onDismiss: (event: Event) => void;
  button: boolean;
  onButtonClick: (event: Event) => void;
};

const Template = (args: ArgsType) => ({
  Component: FlashView,
  props: args,
  on: {
    dismiss: args.onDismiss,
    buttonClick: args.onButtonClick,
  },
});

/* eslint-disable */
export const Default = Template.bind({});
Default.args = {
  title: "Default message",
};

export const DefaultWithButton = Template.bind({});
DefaultWithButton.args = {
  title: "Default with button",
  button: true,
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
