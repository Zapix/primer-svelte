<script lang="ts">
  import { setContext } from "svelte";
  import { ACTION_LIST_VARIANT } from "./constants";
  import type { ListAriaRole, SelectionVariant } from "./types";

  export let variant: SelectionVariant = "none";
  export let role: ListAriaRole = "listbox";

  setContext(ACTION_LIST_VARIANT, variant);
</script>

<ul class="action-list" {role}>
  <slot />
</ul>

<style>
  .action-list {
    margin: 0;
    padding-inline-start: 0;
    padding-top: 8px;
    padding-bottom: 8px;
  }
</style>
