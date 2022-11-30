<script lang="ts">
  // Component that used in storybook and in tests to hide slots in props
  import Flash from "./Flash.svelte";
  import type { FlashVariant } from "./types";

  export let title: string;
  export let icon = false;
  export let variant: FlashVariant = "default";
  export let full = false;
  export let banner = false;
  export let dismissible = false;
</script>

<Flash {icon} {variant} {full} {banner} {dismissible} on:dismiss>
  {title}
</Flash>
