<script lang="ts">
  import {
    getFonts,
    getColor,
    getRadii,
    getFontSize,
    getSpace,
  } from "../theme";
  import type { ItemVariant } from "./types";
  import { getStyle } from "./utils";

  export let tabIndex = 0;
  export let variant: ItemVariant = "default";
  export let disabled = false;

  const style = getStyle(variant);
</script>

{#if !disabled}
  <li
    class="list-item"
    tabindex={tabIndex}
    role="listitem"
    style:--fontFamily={style.fontFamily}
    style:--fontSize={style.fontSize}
    style:color={style.fontColor}
    style:--paddingX={style.paddingX}
    style:--radius={style.radius}
    style:--bg={style.bg}
    style:--hoverBg={style.hoverBg}
    on:click
  >
    <div class="title">
      <slot />
    </div>
  </li>
{:else}
  <li
    class="list-item disabled"
    style:--fontFamily={style.fontFamily}
    style:--fontSize={style.fontSize}
    style:color={style.disabledFontColor}
    style:--paddingX={style.paddingX}
    style:--radius={style.radius}
    style:--bg={style.bg}
    style:--hoverBg={style.disabledHoverBg}
  >
    <div class="title">
      <slot />
    </div>
  </li>
{/if}

<style>
  li.list-item {
    width: 100%;
    font-family: var(--fontFamily);
    font-size: var(--fontSize);
    cursor: pointer;
    height: 32px;
    padding: var(--paddingX);
    border-radius: var(--radius);
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
  }

  li.list-item.disabled {
    cursor: inherit;
  }

  .title {
    flex-grow: 1;
  }

  li.list-item:hover {
    background-color: var(--hoverBg);
  }

  li.list-item::marker {
    content: "";
  }
</style>