<script lang="ts">
  import get from "lodash/fp/get";
  import octicons from "@primer/octicons";
  import type { IconName, Icon } from "@primer/octicons";
  import { getSize, getIconHeights, closestNaturalHeight } from "./utils";
  import type { SizeName } from "./utils";

  export let iconType: IconName = "alert";
  let icon: Icon = get(iconType, octicons);
  let iconHeights = getIconHeights(icon);

  export let size: SizeName = "small";
  let sizeValue = getSize(size);

  let naturalHeight = closestNaturalHeight(iconHeights, sizeValue);
  let naturalWidth = icon.heights[naturalHeight].width;
</script>

<svg width={naturalWidth} height={naturalHeight} class:octicon={true}>
  {@html icon.heights[naturalHeight].path}
</svg>

<style>
  .octicon {
    display: inline-block;
    vertical-align: text-top;
    fill: currentColor;
    overflow: visible;
  }
</style>
