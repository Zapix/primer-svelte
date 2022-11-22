<script lang="ts">
  import {
    getFonts,
    getFontWeight,
    getFontSize,
    getRadii,
    getSpace,
  } from "../theme";
  import { getBtnStyle } from "./utils";
  export let tabIndex = 0;
  export let disabled = false;

  const styleVars = getBtnStyle();
</script>

<button
  type="button"
  {tabIndex}
  {disabled}
  class="button"
  style:font-family={getFonts("normal")}
  style:font-size={getFontSize(1)}
  style:font-weight={getFontWeight("bold")}
  style:height={"32px"}
  style:border-radius={getRadii(2)}
  style:padding-left={getSpace(3)}
  style:padding-right={getSpace(3)}
  style:color={styleVars.text}
  style:bagckground-color={styleVars.bg}
  style:border-color={styleVars.border}
  style:--hover-text={styleVars.hoverText}
  style:--hover-bg={styleVars.hoverBg}
  style:--hover-border={styleVars.hoverBorder}
  style:--active-bg={styleVars.activeBg}
  style:--active-border={styleVars.activeBorder}
  style:--disabled-text={styleVars.disabledText}
  style:--disabled-bg={styleVars.disabledBg}
  style:--disabled-border={styleVars.disabledBorder}
  style:--focus-bg={styleVars.focusBg}
  style:--focus-border={styleVars.focusBorder}
  style:--focus-shadow={styleVars.focusShadow}
  on:click
>
  <slot />
</button>

<style>
  .button:hover {
    color: var(--hover-text);
    background-color: var(--hover-bg);
    border-color: var(--hover-border);
  }

  .button:focus-visible:not(:disabled) {
    background-color: var(--focus-bg);
    border-color: var(--focus-border);
    box-shadow: var(--focus-shadow);
  }

  .button:active {
    background-color: var(--active-bg);
    border-color: var(--active-border);
  }

  .button:disabled {
    color: var(--disabled-text);
    background-color: var(--disabled-bg);
    border-radius: var(--disabled-border);
  }
</style>
