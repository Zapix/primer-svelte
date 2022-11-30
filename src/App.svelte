<script lang="ts">
  import Flash from "./Flash/Flash.svelte";
</script>

<main>
  <h1>Primer-svelte components</h1>

  <h2>Flash</h2>

  <strong>default</strong>
  <Flash variant="default" icon={true}>Default flash</Flash>

  <strong>success</strong>
  <Flash variant="success" icon={true}>Success flash</Flash>

  <strong>warning</strong>
  <Flash variant="warning" icon={true}>Warning flash</Flash>

  <strong>danger</strong>
  <Flash variant="danger" icon={true}>Danger flash</Flash>
</main>
