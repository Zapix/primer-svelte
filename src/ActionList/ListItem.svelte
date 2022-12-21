<script lang="ts">
  import LiWrapper from "./LiWrapper.svelte";
  import type { ItemAriaRole, ItemVariant } from "./types";

  export let tabIndex = 0;
  export let variant: ItemVariant = "default";
  export let disabled = false;
  export let ariaRole: ItemAriaRole = "listitem";
</script>

<LiWrapper {tabIndex} {variant} {disabled} {ariaRole} on:click>
  <div class="title">
    <slot />
  </div>
</LiWrapper>

<style>
  .title {
    flex-grow: 1;
  }
</style>
