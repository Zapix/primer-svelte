<script lang="ts">
  // View to hide slot values in props. Uses for storybook and tests
  import ListItem from "./ListItem.svelte";

  export let title: string;
</script>

<ul>
  <ListItem on:click>
    {title}
  </ListItem>
</ul>
