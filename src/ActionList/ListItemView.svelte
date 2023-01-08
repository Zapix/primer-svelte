<script lang="ts">
  // View to hide slot values in props. Uses for storybook and tests
  import type { IconName } from "@primer/octicons";

  import ListItem from "./ListItem.svelte";
  import type { ItemSize, ItemVariant, SelectionVariant } from "./types";
  import ActionList from "./ActionList.svelte";
  import Octicon from "../Octicon/Octicon.svelte";

  export let selectionVariant: SelectionVariant = "none";
  export let title: string;
  export let link: string | undefined = undefined;
  export let inlineDescription = "";
  export let blockDescription = "";
  export let variant: ItemVariant = "default";
  export let size: ItemSize = "small";
  export let active: boolean;
  export let disabled: boolean;
  export let selected: boolean;
  export let divider: boolean;
  export let leadingIcon: IconName | undefined = undefined;
  export let trailingIcon: IconName | undefined = undefined;
</script>

<ActionList variant={selectionVariant}>
  {#if inlineDescription && blockDescription}
    {#if leadingIcon && trailingIcon}
      <ListItem
        on:click
        {link}
        {active}
        {size}
        {disabled}
        {variant}
        {selected}
        {divider}
      >
        <Octicon slot="lead" iconType={leadingIcon} />
        {title}
        <svelte:fragment slot="inline-description">
          {inlineDescription}
        </svelte:fragment>
        <svelte:fragment slot="block-description">
          {blockDescription}
        </svelte:fragment>
        <Octicon slot="trail" iconType={trailingIcon} />
      </ListItem>
    {:else if trailingIcon}
      <ListItem
        on:click
        {link}
        {active}
        {size}
        {disabled}
        {variant}
        {selected}
        {divider}
      >
        {title}
        <svelte:fragment slot="inline-description">
          {inlineDescription}
        </svelte:fragment>
        <svelte:fragment slot="block-description">
          {blockDescription}
        </svelte:fragment>
        <Octicon slot="trail" iconType={trailingIcon} />
      </ListItem>
    {:else if leadingIcon}
      <ListItem
        on:click
        {link}
        {active}
        {size}
        {disabled}
        {variant}
        {selected}
        {divider}
      >
        <Octicon slot="lead" iconType={leadingIcon} />
        {title}
        <svelte:fragment slot="inline-description">
          {inlineDescription}
        </svelte:fragment>
        <svelte:fragment slot="block-description">
          {blockDescription}
        </svelte:fragment>
      </ListItem>
    {:else}
      <ListItem
        on:click
        {link}
        {active}
        {size}
        {disabled}
        {variant}
        {selected}
        {divider}
      >
        {title}
        <svelte:fragment slot="inline-description">
          {inlineDescription}
        </svelte:fragment>
        <svelte:fragment slot="block-description">
          {blockDescription}
        </svelte:fragment>
      </ListItem>
    {/if}
  {:else if inlineDescription}
    {#if leadingIcon && trailingIcon}
      <ListItem
        on:click
        {link}
        {active}
        {size}
        {disabled}
        {variant}
        {selected}
        {divider}
      >
        <Octicon slot="lead" iconType={leadingIcon} />
        {title}
        <svelte:fragment slot="inline-description">
          {inlineDescription}
        </svelte:fragment>
        <Octicon slot="trail" iconType={trailingIcon} />
      </ListItem>
    {:else if trailingIcon}
      <ListItem
        on:click
        {link}
        {active}
        {size}
        {disabled}
        {variant}
        {selected}
        {divider}
      >
        {title}
        <svelte:fragment slot="inline-description">
          {inlineDescription}
        </svelte:fragment>
        <Octicon slot="trail" iconType={trailingIcon} />
      </ListItem>
    {:else if leadingIcon}
      <ListItem
        on:click
        {link}
        {active}
        {size}
        {disabled}
        {variant}
        {selected}
        {divider}
      >
        <Octicon slot="lead" iconType={leadingIcon} />
        {title}
        <svelte:fragment slot="inline-description">
          {inlineDescription}
        </svelte:fragment>
      </ListItem>
    {:else}
      <ListItem
        on:click
        {link}
        {active}
        {size}
        {disabled}
        {variant}
        {selected}
        {divider}
      >
        {title}
        <svelte:fragment slot="inline-description">
          {inlineDescription}
        </svelte:fragment>
      </ListItem>
    {/if}
  {:else if blockDescription}
    {#if leadingIcon && trailingIcon}
      <ListItem
        on:click
        {link}
        {active}
        {size}
        {disabled}
        {variant}
        {selected}
        {divider}
      >
        <Octicon slot="lead" iconType={leadingIcon} />
        {title}
        <svelte:fragment slot="block-description">
          {blockDescription}
        </svelte:fragment>
        <Octicon slot="trail" iconType={trailingIcon} />
      </ListItem>
    {:else if trailingIcon}
      <ListItem
        on:click
        {link}
        {active}
        {size}
        {disabled}
        {variant}
        {selected}
        {divider}
      >
        {title}
        <svelte:fragment slot="block-description">
          {blockDescription}
        </svelte:fragment>
        <Octicon slot="trail" iconType={trailingIcon} />
      </ListItem>
    {:else if leadingIcon}
      <ListItem
        on:click
        {link}
        {active}
        {size}
        {disabled}
        {variant}
        {selected}
        {divider}
      >
        <Octicon slot="lead" iconType={leadingIcon} />
        {title}
        <svelte:fragment slot="block-description">
          {blockDescription}
        </svelte:fragment>
      </ListItem>
    {:else}
      <ListItem
        on:click
        {link}
        {active}
        {size}
        {disabled}
        {variant}
        {selected}
        {divider}
      >
        {title}
        <svelte:fragment slot="block-description">
          {blockDescription}
        </svelte:fragment>
      </ListItem>
    {/if}
  {:else if leadingIcon && trailingIcon}
    <ListItem
      on:click
      {link}
      {active}
      {size}
      {disabled}
      {variant}
      {selected}
      {divider}
    >
      <Octicon slot="lead" iconType={leadingIcon} />
      {title}
      <Octicon slot="trail" iconType={trailingIcon} />
    </ListItem>
  {:else if trailingIcon}
    <ListItem
      on:click
      {link}
      {active}
      {size}
      {disabled}
      {variant}
      {selected}
      {divider}
    >
      {title}
      <Octicon slot="trail" iconType={trailingIcon} />
    </ListItem>
  {:else if leadingIcon}
    <ListItem
      on:click
      {link}
      {active}
      {size}
      {disabled}
      {variant}
      {selected}
      {divider}
    >
      <Octicon slot="lead" iconType={leadingIcon} />
      {title}
    </ListItem>
  {:else}
    <ListItem
      on:click
      {link}
      {active}
      {size}
      {disabled}
      {variant}
      {selected}
      {divider}
    >
      {title}
    </ListItem>
  {/if}
</ActionList>
