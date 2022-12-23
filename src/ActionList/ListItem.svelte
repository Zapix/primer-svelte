<script lang="ts">
  import { getContext } from "svelte";

  import { getSpace } from "../theme";
  import LiWrapper from "./LiWrapper.svelte";
  import { ACTION_LIST_VARIANT } from "./constants";
  import type { ItemAriaRole, ItemVariant, SelectionVariant } from "./types";

  const actionListVariant: SelectionVariant = getContext(ACTION_LIST_VARIANT);
  export let tabIndex = 0;
  export let variant: ItemVariant = "default";
  export let selected = false;
  export let disabled = false;
  export let ariaRole: ItemAriaRole = "listitem";
</script>

<LiWrapper {tabIndex} {variant} {disabled} {ariaRole} on:click>
  {#if actionListVariant !== "none"}
    <div
      data-testid="selectable-place"
      class="selectable"
      style:--selectableWidth={getSpace(3)}
      style:--selectableMargin={getSpace(2)}
    />
  {/if}
  <div class="title">
    <slot />
  </div>
</LiWrapper>

<style>
  .selectable {
    width: var(--selectableWidth);
    margin-right: var(--selectableMargin);
  }

  .title {
    flex-grow: 1;
  }
</style>
