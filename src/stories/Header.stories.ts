import Header from "./Header.svelte";
import type { User } from "./Header.svelte";

export default {
  title: "Example/Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/svelte/configure/story-layout
    layout: "fullscreen",
  },
  argTypes: {
    onLogin: { action: "onLogin" },
    onLogout: { action: "onLogout" },
    onCreateAccount: { action: "onCreateAccount" },
  },
};

type ArgsType = {
  user: User | null;
  onLogin: (e: Event) => void;
  onLogout: (e: Event) => void;
  onCreateAccount: (e: Event) => void;
};

/* eslint-disable */
const Template = (args: ArgsType) => ({
  Component: Header,
  props: args,
  on: {
    login: args.onLogin,
    logout: args.onLogout,
    createAccount: args.onCreateAccount,
  },
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Jane Doe",
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
/* eslint-enable */
