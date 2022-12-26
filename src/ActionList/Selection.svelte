<script lang="ts">
  import { getColor } from "../theme";
  import type { SelectionVariant } from "./types";
  import Octicon from "../Octicon/Octicon.svelte";

  export let selected: boolean;
  export let selectionVariant: Exclude<SelectionVariant, "none">;
</script>

{#if selectionVariant === "single"}
  {#if selected}
    <Octicon iconType="check" />
  {/if}
{:else}
  <svg
    class="multipleCheck"
    class:selected
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style:--rectFill={selected
      ? getColor(["accent", "fg"])
      : getColor(["canvas", "default"])}
    style:--rectStroke={selected
      ? getColor(["accent", "fg"])
      : getColor(["border", "default"])}
    style:--pathFill={getColor(["fg", "onEmphasis"])}
    sytle:--pathBoxShadow={getColor(["shadow", "small"])}
  >
    <rect x="2" y="2" width="12" height="12" rx="4" />
    <path
      fill-rule="evenodd"
      stroke-width="0"
      d="M4.03231 8.69862C3.84775 8.20646 4.49385 7.77554 4.95539 7.77554C5.41693 7.77554 6.80154 9.85246 6.80154 9.85246C6.80154 9.85246 10.2631 4.314 10.4938 4.08323C10.7246 3.85246 11.8785 4.08323 11.4169 5.00631C11.0081 5.82388 7.26308 11.4678 7.26308 11.4678C7.26308 11.4678 6.80154 12.1602 6.34 11.4678C5.87846 10.7755 4.21687 9.19077 4.03231 8.69862Z"
    />
  </svg>
{/if}

<style>
  .multipleCheck rect {
    fill: var(--rectFill);
    stroke: var(--rectStroke);
    shape-rendering: auto;
  }

  .multipleCheck path {
    opacity: 0;
  }

  .multipleCheck.selected path {
    fill: var(--pathFill);
    box-shadow: var(--pathBoxShadow);
    opacity: 1;
  }
</style>
