<script lang="ts">
  // Component that used in storybook to hide slot in props
  import Button from "./Button.svelte";
  import type { ButtonSize } from "./types";

  export let title: string;
  export let size: ButtonSize = "medium";
  export let tabIndex = -1;
  export let disabled = false;
  export let selected = false;
</script>

<Button {tabIndex} {disabled} {size} {selected} on:click>
  {title}
</Button>
