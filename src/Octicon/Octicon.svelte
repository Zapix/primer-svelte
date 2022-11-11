<script lang="ts">
  import get from "lodash/fp/get";
  import octicons from "@primer/octicons";
  import type { IconName, Icon } from "@primer/octicons";

  import { getSize, getIconHeights, closestNaturalHeight } from "./utils";
  import type { SizeName } from "./utils";

  /* Props for Octicon */
  export let iconType: IconName = "alert";
  export let size: SizeName = "small";
  export let tabIndex = -1;
  export let ariaLabel = "";

  let icon: Icon = get(iconType, octicons);
  let iconHeights = getIconHeights(icon);

  let sizeValue = getSize(size);

  let naturalHeight = closestNaturalHeight(iconHeights, sizeValue);
  let naturalWidth = icon.heights[naturalHeight].width;

  let focusable = tabIndex >= 0;
</script>

<svg
  aria-hidden={ariaLabel ? "false" : "true"}
  aria-label={ariaLabel}
  data-testid="octicon"
  on:click
  role={focusable ? "button" : ""}
  width={naturalWidth}
  height={naturalHeight}
  tabindex={tabIndex}
  focusable={focusable ? "true" : "false"}
  class:octicon={true}
  class:focusable
  class:nofocus={!focusable}
>
  {@html icon.heights[naturalHeight].path}
</svg>

<style>
  .octicon {
    display: inline-block;
    vertical-align: text-top;
    fill: currentColor;
    overflow: visible;
  }

  .focusable {
    cursor: pointer;
  }

  .octicon.nofocus:focus {
    outline: none;
  }
</style>
