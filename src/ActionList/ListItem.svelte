<script lang="ts">
  import {
    getFonts,
    getColor,
    getRadii,
    getFontSize,
    getSpace,
  } from "../theme";
  export let tabIndex = 0;
  export let disabled = false;
</script>

{#if !disabled}
  <li
    class="list-item"
    tabindex={tabIndex}
    role="listitem"
    style:--fontFamily={getFonts("normal")}
    style:--fontSize={getFontSize(1)}
    style:color={getColor(["fg", "default"])}
    style:--paddingX={getSpace(2)}
    style:--radius={getRadii(2)}
    style:--bg={"unset"}
    style:--hoverBg={getColor(["actionListItem", "default", "hoverBg"])}
    on:click
  >
    <div class="title">
      <slot />
    </div>
  </li>
{:else}
  <li
    class="list-item disabled"
    style:--fontFamily={getFonts("normal")}
    style:--fontSize={getFontSize(1)}
    style:color={getColor(["fg", "muted"])}
    style:--paddingX={getSpace(2)}
    style:--radius={getRadii(2)}
    style:--bg={"unset"}
    style:--hoverBg={"none"}
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
