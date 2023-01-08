<script lang="ts">
  import { getContext } from "svelte";

  import { getSpace, getColor, getFontSize } from "../theme";
  import LiWrapper from "./LiWrapper.svelte";
  import LinkWrapper from "./LinkWrapper.svelte";
  import { ACTION_LIST_VARIANT } from "./constants";
  import type {
    ItemAriaRole,
    ItemSize,
    ItemVariant,
    SelectionVariant,
  } from "./types";
  import Selection from "./Selection.svelte";

  const actionListVariant: SelectionVariant = getContext(ACTION_LIST_VARIANT);
  export let link: string | undefined = undefined;
  export let target = "_self";
  export let tabIndex = 0;
  export let variant: ItemVariant = "default";
  export let size: ItemSize = "small";
  export let active = false;
  export let selected = false;
  export let disabled = false;
  export let divider = false;
  export let ariaRole: ItemAriaRole = "listitem";

  const wrapper = link ? LinkWrapper : LiWrapper;
  const wrapperProps = link
    ? {
        link,
        target,
        tabIndex,
        variant,
        size,
        disabled,
        ariaRole,
        active,
      }
    : {
        tabIndex,
        variant,
        size,
        disabled,
        ariaRole,
        active,
      };
</script>

<svelte:component this={wrapper} {...wrapperProps} on:click>
  {#if actionListVariant !== "none"}
    <div
      data-testid="selectable-place"
      class="selectable"
      style:--selectableWidth={getSpace(3)}
      style:--selectableMargin={getSpace(2)}
    >
      <Selection {selected} selectionVariant={actionListVariant} />
    </div>
  {/if}
  {#if $$slots.lead}
    <div data-testid="lead-place" class="lead" style:--leadMargin={getSpace(2)}>
      <slot name="lead" />
    </div>
  {/if}
  <div
    class="main"
    class:divider
    style:--dividerColor={getColor(["actionListItem", "inlineDivider"])}
  >
    <div class="main-row">
      <div class="title">
        <slot />
      </div>
      {#if $$slots["inline-description"]}
        <div
          data-testid="inline-description"
          class="inline-description"
          style:--fontSize={getFontSize(0)}
          style:--fontColor={getColor(["fg", "muted"])}
          style:--inlineMargin={getSpace(2)}
        >
          <slot name="inline-description" />
        </div>
      {/if}
    </div>
    {#if $$slots["block-description"]}
      <div
        data-testid="block-description"
        class="description-row"
        style:--fontSize={getFontSize(0)}
        style:--fontColor={getColor(["fg", "muted"])}
        style:--inlineMargin={getSpace(2)}
      >
        <slot name="block-description" />
      </div>
    {/if}
  </div>
  {#if $$slots.trail}
    <div
      data-testid="trail-place"
      class="trail"
      style:--trailMargin={getSpace(2)}
    >
      <slot name="trail" />
    </div>
  {/if}
</svelte:component>

<style>
  .selectable {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
    width: var(--selectableWidth);
    margin-right: var(--selectableMargin);
  }

  .lead {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
    margin-right: var(--leadMargin);
  }

  .main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    position: relative;
  }

  .divider::before {
    content: " ";
    display: block;
    position: absolute;
    width: 100%;
    top: -7px;
    border-top: 1px solid;
    border-color: var(--dividerColor);
  }

  .main-row {
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
  }

  .title {
    white-space: nowrap;
    text-overflow: ellipsis;
    align-self: flex-end;
  }

  .inline-description {
    align-self: flex-end;
    margin-left: var(--inlineMargin);
    font-size: var(--fontSize);
    color: var(--fontColor);
  }

  .description-row {
    font-size: var(--fontSize);
    color: var(--fontColor);
  }

  .trail {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
    margin-left: var(--trailMargin);
  }
</style>
