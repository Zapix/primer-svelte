<script lang="ts">
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

  const style = getStyle(variant);
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
</style>
