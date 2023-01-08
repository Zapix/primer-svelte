<script lang="ts">
  import type { ItemAriaRole, ItemSize, ItemVariant } from "./types";
  import { getStyle, getSize } from "./utils";

  export let link: string;
  export let target = "_self";
  export let tabIndex = 0;
  export let variant: ItemVariant = "default";
  export let size: ItemSize = "small";
  export let active = false;
  export let disabled = false;
  export let ariaRole: ItemAriaRole = "listitem";

  const style = getStyle(variant);
</script>

{#if !disabled}
  <li
    class="list-item"
    class:active
    style:--height={getSize(size)}
    style:--fontFamily={style.fontFamily}
    style:--fontSize={style.fontSize}
    style:--fontColor={style.fontColor}
    style:--paddingX={style.paddingX}
    style:--radius={style.radius}
    style:--bg={style.bg}
    style:--hoverBg={style.hoverBg}
    style:--activeBg={style.hoverBg}
  >
    <a
      href={link}
      {target}
      class="link"
      data-testid="item-link"
      {tabIndex}
      role={ariaRole}
    >
      <slot />
    </a>
  </li>
{:else}
  <li
    class="list-item disabled"
    class:active
    style:--height={getSize(size)}
    style:--fontFamily={style.fontFamily}
    style:--fontSize={style.fontSize}
    style:color={style.disabledFontColor}
    style:--paddingX={style.paddingX}
    style:--radius={style.radius}
    style:--bg={style.bg}
    style:--hoverBg={style.disabledHoverBg}
    style:--activeBg={style.hoverBg}
  >
    <slot />
  </li>
{/if}

<style>
  li.list-item {
    width: 100%;
    font-family: var(--fontFamily);
    font-size: var(--fontSize);
    color: var(--fontColor);
    cursor: pointer;
    min-height: var(--height);
    padding: var(--paddingX);
    border-radius: var(--radius);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    box-sizing: border-box;
  }

  a.link {
    color: var(--fontColor);
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    box-sizing: border-box;
    width: 100%;
  }

  li.list-item.disabled {
    cursor: inherit;
  }

  li.list-item:hover {
    background-color: var(--hoverBg);
  }

  li.list-item.active {
    background-color: var(--activeBg) !important;
  }

  li.list-item::marker {
    content: "";
  }
</style>
