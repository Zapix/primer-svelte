<script lang="ts">
  import ActionList from "../ActionList.svelte";
  import ListItem from "../ListItem.svelte";
  import Octicon from "../../Octicon/Octicon.svelte";
</script>

<ActionList>
  <ListItem>
    <Octicon iconType="link" slot="lead" />
    Zapix/primer-svelete
  </ListItem>
  <ListItem>
    <Octicon iconType="law" slot="lead" />
    MIT Licence
  </ListItem>
  <ListItem>
    <Octicon iconType="star" slot="lead" />
    256 stars
  </ListItem>
  <ListItem>
    <Octicon iconType="repo-forked" slot="lead" />
    2 forks
  </ListItem>
  <ListItem variant="danger">
    <Octicon iconType="alert" slot="lead" />
    4 vulnerabilities
  </ListItem>
</ActionList>
