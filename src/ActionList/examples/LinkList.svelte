<script lang="ts">
  import ActionList from "../ActionList.svelte";
  import ListItem from "../ListItem.svelte";
  import Octicon from "../../Octicon/Octicon.svelte";
</script>

<ActionList>
  <ListItem link="https://github.com/Zapix/primer-svelte">
    <Octicon iconType="link" slot="lead" />
    Primer Svelte
  </ListItem>
  <ListItem link="https://habr.com/" target="_blank">
    <Octicon iconType="link-external" slot="lead" />
    Habra Habr
  </ListItem>
</ActionList>
