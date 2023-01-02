<script lang="ts">
  import { getContext } from "svelte";

  import { getSpace } from "../theme";
  import LiWrapper from "./LiWrapper.svelte";
  import { ACTION_LIST_VARIANT } from "./constants";
  import type {
    ItemAriaRole,
    ItemSize,
    ItemVariant,
    SelectionVariant,
  } from "./types";
  import Selection from "./Selection.svelte";

  const actionListVariant: SelectionVariant = getContext(ACTION_LIST_VARIANT);
  export let tabIndex = 0;
  export let variant: ItemVariant = "default";
  export let size: ItemSize = "small";
  export let active = false;
  export let selected = false;
  export let disabled = false;
  export let ariaRole: ItemAriaRole = "listitem";
</script>

<LiWrapper {tabIndex} {variant} {size} {disabled} {ariaRole} {active} on:click>
  {#if actionListVariant !== "none"}
    <div
      data-testid="selectable-place"
      class="selectable"
      style:--selectableWidth={getSpace(3)}
      style:--selectableMargin={getSpace(2)}
    >
      <Selection {selected} selectionVariant={actionListVariant} />
    </div>
  {/if}
  {#if $$slots.lead}
    <div data-testid="lead-place" class="lead" style:--leadMargin={getSpace(2)}>
      <slot name="lead" />
    </div>
  {/if}
  <div class="title">
    <slot />
  </div>
  {#if $$slots.trail}
    <div
      data-testid="trail-place"
      class="trail"
      style:--trailMargin={getSpace(2)}
    >
      <slot name="trail" />
    </div>
  {/if}
</LiWrapper>

<style>
  .selectable {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
    width: var(--selectableWidth);
    margin-right: var(--selectableMargin);
  }

  .lead {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
    margin-right: var(--leadMargin);
  }

  .title {
    flex-grow: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .trail {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
    margin-left: var(--trailMargin);
  }
</style>
