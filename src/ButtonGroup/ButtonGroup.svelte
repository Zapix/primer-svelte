<script type="ts">
</script>

<div class="button-group">
  <slot />
</div>

<style>
  .button-group {
    display: inline-flex;
  }

  div > :global(button:first-child) {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }

  div > :global(button:last-child) {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
  }

  div > :global(:not(button:last-child, button:first-child)) {
    border-radius: 0 !important;
  }
</style>
