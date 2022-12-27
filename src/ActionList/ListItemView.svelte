<script lang="ts">
  // View to hide slot values in props. Uses for storybook and tests
  import ListItem from "./ListItem.svelte";
  import type { ItemVariant, SelectionVariant } from "./types";
  import ActionList from "./ActionList.svelte";

  export let selectionVariant: SelectionVariant = "none";
  export let title: string;
  export let variant: ItemVariant = "default";
  export let active: boolean;
  export let disabled: boolean;
  export let selected: boolean;
</script>

<ActionList variant={selectionVariant}>
  <ListItem on:click {active} {disabled} {variant} {selected}>
    {title}
  </ListItem>
</ActionList>
