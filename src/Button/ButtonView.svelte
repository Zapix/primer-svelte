<script lang="ts">
  // Component that used in storybook and in tests to hide slot in props
  import Button from "./Button.svelte";
  import type { ButtonSize, ButtonType } from "./types";

  export let title: string;
  export let type: ButtonType = "button";
  export let size: ButtonSize = "medium";
  export let tabIndex = -1;
  export let disabled = false;
  export let selected = false;
</script>

<Button {type} {tabIndex} {disabled} {size} {selected} on:click>
  {title}
</Button>
