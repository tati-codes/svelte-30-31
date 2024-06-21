<script>
  import Pause from "./Playback/Pause.svelte"
  import Triangle from "./Playback/Triangle.svelte"
  const isPlaying = true;
</script>

{#if isPlaying}
  <Pause/>
{:else}
  <Triangle/>
{/if}