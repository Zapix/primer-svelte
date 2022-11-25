<script lang="ts">
  // Component that used in storybook and in tests to hide slots in props
  import Button from "./Button.svelte";
  import type { ButtonSize, ButtonType, ButtonVariant } from "./types";
  import type { IconName } from "@primer/octicons";
  import Octicon from "../Octicon/Octicon.svelte";
  import Counter from "./Counter.svelte";

  export let title: string;
  export let variant: ButtonVariant = "default";
  export let type: ButtonType = "button";
  export let size: ButtonSize = "medium";
  export let tabIndex = -1;
  export let disabled = false;
  export let selected = false;
  export let leadingIcon: null | IconName = null;
  export let trailingIcon: null | IconName = null;
  export let counter = 0;
</script>

{#if counter > 0}
  {#if leadingIcon && trailingIcon}
    <Button {type} {variant} {tabIndex} {disabled} {size} {selected} on:click>
      <Octicon slot="leading" iconType={leadingIcon} />
      {title}
      <Counter slot="counter" value={counter} />
      <Octicon slot="trailing" iconType={trailingIcon} />
    </Button>
  {:else if trailingIcon}
    <Button {type} {variant} {tabIndex} {disabled} {size} {selected} on:click>
      {title}
      <Counter slot="counter" value={counter} />
      <Octicon slot="trailing" iconType={trailingIcon} />
    </Button>
  {:else if leadingIcon}
    <Button {type} {variant} {tabIndex} {disabled} {size} {selected} on:click>
      <Octicon slot="leading" iconType={leadingIcon} />
      {title}
      <Counter slot="counter" value={counter} />
    </Button>
  {:else}
    <Button {type} {variant} {tabIndex} {disabled} {size} {selected} on:click>
      {title}
      <Counter slot="counter" value={counter} />
    </Button>
  {/if}
{:else if leadingIcon && trailingIcon}
  <Button {type} {variant} {tabIndex} {disabled} {size} {selected} on:click>
    <Octicon slot="leading" iconType={leadingIcon} />
    {title}
    <Octicon slot="trailing" iconType={trailingIcon} />
  </Button>
{:else if trailingIcon}
  <Button {type} {variant} {tabIndex} {disabled} {size} {selected} on:click>
    {title}
    <Octicon slot="trailing" iconType={trailingIcon} />
  </Button>
{:else if leadingIcon}
  <Button {type} {variant} {tabIndex} {disabled} {size} {selected} on:click>
    <Octicon slot="leading" iconType={leadingIcon} />
    {title}
  </Button>
{:else}
  <Button {type} {variant} {tabIndex} {disabled} {size} {selected} on:click>
    {title}
  </Button>
{/if}
