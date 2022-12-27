<script lang="ts">
  // View to hide slot values in props. Uses for storybook and tests
  import type { IconName } from "@primer/octicons";

  import ListItem from "./ListItem.svelte";
  import type { ItemSize, ItemVariant, SelectionVariant } from "./types";
  import ActionList from "./ActionList.svelte";
  import Octicon from "../Octicon/Octicon.svelte";

  export let selectionVariant: SelectionVariant = "none";
  export let title: string;
  export let variant: ItemVariant = "default";
  export let size: ItemSize = "small";
  export let active: boolean;
  export let disabled: boolean;
  export let selected: boolean;
  export let leadingIcon: IconName | undefined = undefined;
</script>

<ActionList variant={selectionVariant}>
  {#if leadingIcon}
    <ListItem on:click {active} {size} {disabled} {variant} {selected}>
      <Octicon slot="lead" iconType={leadingIcon} />
      {title}
    </ListItem>
  {:else}
    <ListItem on:click {active} {size} {disabled} {variant} {selected}>
      {title}
    </ListItem>
  {/if}
</ActionList>
