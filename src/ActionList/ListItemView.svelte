<script lang="ts">
  // View to hide slot values in props. Uses for storybook and tests
  import ListItem from "./ListItem.svelte";
  import type { ItemVariant } from "./types";

  export let title: string;
  export let variant: ItemVariant = "default";
  export let disabled: boolean;
</script>

<ul>
  <ListItem on:click {disabled} {variant}>
    {title}
  </ListItem>
</ul>
