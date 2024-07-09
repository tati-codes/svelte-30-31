<script>
  import { currentTaskList } from "../../../Store/rootStore"
  import Pause from "./Playback/Pause.svelte"
  import Triangle from "./Playback/Triangle.svelte"
  $: isPlaying = $currentTaskList.isPlaying;
</script>

{#if isPlaying}
  <Pause/>
{:else}
  <Triangle/>
{/if}