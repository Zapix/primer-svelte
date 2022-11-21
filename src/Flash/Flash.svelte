<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import Octicon from "../Octicon/Octicon.svelte";
  import type { FlashVariant } from "./types";
  import { getStyle } from "./utils";
  import {
    getFonts,
    getBorderWidth,
    getRadii,
    getSpace,
    getLineHeight,
  } from "../theme";

  export let title: string;
  export let variant: FlashVariant = "default";
  export let dismissible = false;

  const style = getStyle(variant);

  const dispatch = createEventDispatcher();

  function handleDismissButtonClick() {
    dispatch("dismiss");
  }
</script>

<div
  class="flash"
  style:color={style.color}
  style:border-color={style.borderColor}
  style:background-color={style.backgroundColor}
  style:font-family={getFonts("normal")}
  style:border-width={getBorderWidth(1)}
  style:border-radius={getRadii(2)}
  style:padding={getSpace(3)}
  style:line-height={getLineHeight("default")}
>
  <div class="flash-title">
    <span>{title}</span>
  </div>

  {#if dismissible}
    <div class="flash-dismiss">
      <Octicon
        ariaLabel="dismiss"
        iconType="x"
        tabIndex={0}
        fill={style.svg.color}
        on:click={handleDismissButtonClick}
      />
    </div>
  {/if}
</div>

<style>
  .flash {
    display: flex;
    flex-direction: row;
    border-style: solid;
    box-sizing: border-box;
  }

  .flash-title {
    flex-grow: 1;
  }

  .flash-dismiss {
    flex-grow: 0;
  }
</style>
