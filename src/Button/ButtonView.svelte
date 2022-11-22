<script lang="ts">
  // Component that used in storybook to hide slot in props
  import Button from "./Button.svelte";

  export let title: string;
  export let tabIndex = -1;
  export let disabled = false;
</script>

<Button {tabIndex} {disabled} on:click>
  {title}
</Button>
