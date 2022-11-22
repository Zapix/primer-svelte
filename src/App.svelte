<script lang="ts">
  import Flash from "./Flash/Flash.svelte";
</script>

<main>
  <h1>Primer-svelte components</h1>

  <h2>Flash</h2>

  <strong>default</strong>
  <Flash variant="default" title="Default flash" icon={true} />

  <strong>success</strong>
  <Flash variant="success" title="Success flash" icon={true} />

  <strong>warning</strong>
  <Flash variant="warning" title="Warning flash" icon={true} />

  <strong>danger</strong>
  <Flash variant="danger" title="Danger flash" icon={true} />
</main>
