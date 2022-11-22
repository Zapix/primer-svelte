<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import Octicon from "../Octicon/Octicon.svelte";
  import type { FlashVariant } from "./types";
  import { getIconType, getStyle } from "./utils";
  import {
    getFonts,
    getBorderWidth,
    getRadii,
    getSpace,
    getLineHeight,
  } from "../theme";

  export let title: string;
  export let icon = false;
  export let variant: FlashVariant = "default";
  export let dismissible = false;
  export let full = false;
  export let banner = false;

  const style = getStyle(variant);

  const dispatch = createEventDispatcher();

  function handleDismissButtonClick() {
    dispatch("dismiss");
  }
</script>

<div
  class="flash"
  class:full
  class:banner
  style:color={style.color}
  style:border-color={style.borderColor}
  style:background-color={style.backgroundColor}
  style:font-family={getFonts("normal")}
  style:border-width={getBorderWidth(1)}
  style:border-radius={getRadii(2)}
  style:padding={getSpace(3)}
  style:line-height={getLineHeight("default")}
>
  {#if icon}
    <div class="flash-icon" style:margin-right={getSpace(3)}>
      <Octicon
        iconType={getIconType(variant)}
        fill={style.svg.color}
        verticalAlign="bottom"
      />
    </div>
  {/if}
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

  .flash-icon {
    flex-grow: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flash-title {
    flex-grow: 1;
  }

  .flash-dismiss {
    flex-grow: 0;
  }

  .full {
    border-radius: 0 !important;
    border-left: none;
    border-right: none;
  }

  .banner {
    margin-top: -1px;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
</style>
