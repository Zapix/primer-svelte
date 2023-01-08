<script lang="ts">
  import Flash from "./Flash/Flash.svelte";
  import Button from "./Button/Button.svelte";
  import SampleList from "./ActionList/examples/SampleList.svelte";
  import SingleSelectList from "./ActionList/examples/SingleSelectList.svelte";
  import MultipleSelectList from "./ActionList/examples/MultipleSelectList.svelte";
  import LinkList from "./ActionList/examples/LinkList.svelte";

  let options = [
    { id: 1, title: "option 1" },
    { id: 2, title: "option 2" },
    { id: 3, title: "option 3" },
    { id: 4, title: "option 4" },
  ];
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

  <strong>success with button</strong>
  <Flash variant="success" icon={true}>
    Success flash
    <Button slot="button" tabIndex={1} size="small">click</Button>
  </Flash>
  <h2>Action List</h2>
  <strong>sample list:</strong>
  <SampleList />
  <strong>Single Select</strong>
  <SingleSelectList {options} />
  <strong>Multiple Select</strong>
  <MultipleSelectList {options} />
  <strong>Link List</strong>
  <LinkList />
</main>
