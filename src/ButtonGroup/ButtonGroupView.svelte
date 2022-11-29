<script lang="ts">
  // Component that used in storybook and in tests to hide slots in props
  import { createEventDispatcher } from "svelte";

  import ButtonGroup from "./ButtonGroup.svelte";
  import Button from "../Button/Button.svelte";

  export let firstTitle: string;
  export let secondTitle: string;
  export let thirdTitle: string;

  const dispatch = createEventDispatcher();

  function handleClick(value) {
    dispatch("buttonClick", value);
  }
</script>

<ButtonGroup>
  <Button size="medium" tabIndex={1} on:click={() => handleClick(firstTitle)}>
    {firstTitle}
  </Button>
  <Button size="medium" tabIndex={1} on:click={() => handleClick(secondTitle)}>
    {secondTitle}
  </Button>
  <Button size="medium" tabIndex={1} on:click={() => handleClick(thirdTitle)}>
    {thirdTitle}
  </Button>
</ButtonGroup>
