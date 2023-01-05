<script lang="ts">
  import _ from "lodash/fp/__";
  import get from "lodash/fp/get";
  import map from "lodash/fp/map";
  import { createEventDispatcher } from "svelte";
  import ActionList from "../ActionList.svelte";
  import ListItem from "../ListItem.svelte";

  import type { Option } from "./types";

  const dispatch = createEventDispatcher();

  export let options: Array<Option>;
  let optionsMap: Record<number, Option>;
  $: optionsMap = options.reduce(
    (previousValue, currentValue) => ({
      ...previousValue,
      [currentValue.id]: currentValue,
    }),
    {}
  );

  let getOption: (id: number) => Option;
  $: getOption = get(_, optionsMap);

  export let selectedIds: Set<number> = new Set();
  let selectedIdArr: Array<number>;
  $: selectedIdArr = Array.from(selectedIds);

  let selectedOptions: Array<Option>;
  $: selectedOptions = map(getOption, selectedIdArr);
  $: {
    dispatch("select", selectedOptions);
  }

  function toggle(id: number) {
    if (selectedIds.has(id)) {
      selectedIds.delete(id);
    } else {
      selectedIds.add(id);
    }
    selectedIds = selectedIds;
  }
</script>

<ActionList variant="multiple">
  {#each options as { id, title } (id)}
    <ListItem selected={selectedIds.has(id)} on:click={() => toggle(id)}
      >{title}</ListItem
    >
  {/each}
</ActionList>
