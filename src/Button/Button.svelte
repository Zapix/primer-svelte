<script lang="ts">
  import { getFonts, getFontWeight, getFontSize, getRadii } from "../theme";
  import { getBtnStyle } from "./utils";
  import type { ButtonSize, ButtonType, ButtonVariant } from "./types";

  export let variant: ButtonVariant = "default";
  export let type: ButtonType = "button";
  export let size: ButtonSize = "medium";
  export let tabIndex = 0;
  export let disabled = false;
  export let selected = false;

  const styleVars = getBtnStyle(variant);
</script>

<button
  {type}
  {tabIndex}
  disabled={disabled || selected}
  class:button={true}
  class:selected
  class:invisible={variant === "invisible"}
  class:small={size === "small"}
  class:medium={size === "medium"}
  class:large={size === "large"}
  style:--font-family={getFonts("normal")}
  style:--font-size={getFontSize(1)}
  style:--font-weight={getFontWeight("bold")}
  style:--border-radius={getRadii(2)}
  style:--text={styleVars.text}
  style:--bg={styleVars.bg}
  style:--border={styleVars.border}
  style:--shadow={styleVars.shadow}
  style:--selected-text={styleVars.selectedText}
  style:--selected-bg={styleVars.selectedBg}
  style:--selected-border={styleVars.selectedBorder}
  style:--selected-shadow={styleVars.selectedShadow}
  style:--hover-text={styleVars.hoverText}
  style:--hover-bg={styleVars.hoverBg}
  style:--hover-border={styleVars.hoverBorder}
  style:--active-bg={styleVars.activeBg}
  style:--active-border={styleVars.activeBorder}
  style:--disabled-text={styleVars.disabledText}
  style:--disabled-bg={styleVars.disabledBg}
  style:--disabled-border={styleVars.disabledBorder}
  style:--focus-text={styleVars.focusText}
  style:--focus-bg={styleVars.focusBg}
  style:--focus-border={styleVars.focusBorder}
  style:--focus-shadow={styleVars.focusShadow}
  style:--icon-color={styleVars.icon}
  on:click
>
  {#if $$slots.leading}
    <span data-testid="leading-icon-place" class="icon-place">
      <slot name="leading" />
    </span>
  {/if}
  <slot />
  {#if $$slots.trailing}
    <span data-testid="trailing-icon-place" class="icon-place">
      <slot name="trailing" />
    </span>
  {/if}
</button>

<style>
  .button {
    box-sizing: border-box;
    border-width: 1px;
    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    border-radius: var(--border-radius);
    color: var(--text);
    background-color: var(--bg);
    border-color: var(--border);

    cursor: pointer;
  }

  .button:hover {
    color: var(--hover-text);
    background-color: var(--hover-bg);
    border-color: var(--hover-border);
  }

  .button:focus-visible:not(:disabled) {
    color: var(--focus-text);
    background-color: var(--focus-bg);
    border-color: var(--focus-border);
    box-shadow: var(--focus-shadow);
    outline: none;
  }

  .button:active:not(:disabled) {
    background-color: var(--active-bg) !important;
    border-color: var(--active-border) !important;
  }

  .button:disabled {
    color: var(--disabled-text);
    background-color: var(--disabled-bg);
    border-color: var(--disabled-border);
  }

  .button.selected {
    color: var(--selected-text);
    background: var(--selected-bg);
    border-color: var(--selected-border);
    box-shadow: var(--selected-shadow);
  }

  .button.selected:active {
    color: var(--selected-text);
    background: var(--selected-bg);
    border-color: var(--selected-border);
    box-shadow: var(--selected-shadow);
  }

  .small {
    height: 28px;
    padding-left: 12px;
    padding-right: 12px;
    font-size: 12px;
  }

  .medium {
    height: 32px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 14px;
  }

  .large {
    height: 40px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 14px;
  }

  .button.invisible .icon-place {
    color: var(--icon-color);
  }
</style>
