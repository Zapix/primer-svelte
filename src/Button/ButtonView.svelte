<script lang="ts">
  // Component that used in storybook and in tests to hide slot in props
  import Button from "./Button.svelte";
  import type { ButtonSize, ButtonType, ButtonVariant } from "./types";
  import type { IconName } from "@primer/octicons";
  import Octicon from "../Octicon/Octicon.svelte";

  export let title: string;
  export let variant: ButtonVariant = "default";
  export let type: ButtonType = "button";
  export let size: ButtonSize = "medium";
  export let tabIndex = -1;
  export let disabled = false;
  export let selected = false;
  export let leadingIcon: null | IconName = null;
</script>

{#if leadingIcon}
  <Button {type} {variant} {tabIndex} {disabled} {size} {selected} on:click>
    <Octicon slot="leading" iconType={leadingIcon} />
    {title}
  </Button>
{:else}
  <Button {type} {variant} {tabIndex} {disabled} {size} {selected} on:click>
    {title}
  </Button>
{/if}
