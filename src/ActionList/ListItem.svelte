<script lang="ts">
  import {
    getFonts,
    getColor,
    getRadii,
    getFontSize,
    getSpace,
  } from "../theme";
  export let tabIndex = 0;
</script>

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
>
  <div class="title" on:click>
    <slot />
  </div>
</li>

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
