<script lang="ts">
  import get from "lodash/fp/get";
  import { createEventDispatcher } from "svelte";
  import ActionList from "../ActionList.svelte";
  import ListItem from "../ListItem.svelte";

  type Option = {
    id: number;
    title: string;
  };

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

  export let selectedId: undefined | number = undefined;

  let selectedOption: undefined | Option;

  $: selectedOption = get(selectedId, optionsMap);
  $: {
    dispatch("select", { selected: selectedOption });
  }

  function handleClick(id: number) {
    selectedId = id;
  }
</script>

<div>
  <strong>Selected option:</strong>
  {#if selectedOption}
    {selectedOption.id} - {selectedOption.title}
  {:else}
    --
  {/if}
</div>
<ActionList variant="single">
  {#each options as { id, title } (id)}
    <ListItem selected={id === selectedId} on:click={() => handleClick(id)}
      >{title}</ListItem
    >
  {/each}
</ActionList>
