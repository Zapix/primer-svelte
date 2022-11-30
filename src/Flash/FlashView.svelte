<script lang="ts">
  // Component that used in storybook and in tests to hide slots in props
  import { createEventDispatcher } from "svelte";

  import Flash from "./Flash.svelte";
  import type { FlashVariant } from "./types";
  import Button from "../Button/Button.svelte";

  export let title: string;
  export let icon = false;
  export let variant: FlashVariant = "default";
  export let full = false;
  export let banner = false;
  export let dismissible = false;
  export let button = false;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("buttonClick");
  }
</script>

{#if button}
  <Flash {icon} {variant} {full} {banner} {dismissible} on:dismiss>
    {title}
    <Button slot="button" tabIndex={1} size="small" on:click={handleClick}
      >Sample Button</Button
    >
  </Flash>
{:else}
  <Flash {icon} {variant} {full} {banner} {dismissible} on:dismiss>
    {title}
  </Flash>
{/if}
