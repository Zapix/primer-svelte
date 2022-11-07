<script lang="ts">
  import get from "lodash/fp/get";
  import octicons from "@primer/octicons";
  export let iconType: octicons.IconName;
  let icon = get(iconType, octicons);
</script>

<svg width="16" height="16" class:octicon={true}>
  {@html icon.heights["16"].path}
</svg>

<style>
  .octicon {
    display: inline-block;
    vertical-align: text-top;
    fill: currentColor;
    overflow: visible;
  }
</style>
