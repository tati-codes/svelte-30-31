<script lang="ts">
  import NoVolumeIcon from "../../lib/Icons/icons/NoVolumeIcon.svelte"
  import VolumeIcon from "../../lib/Icons/icons/VolumeIcon.svelte"

// let toggle = () => dispatch("toggleMute")
let toggle = () => null;
let muted: Boolean = false
</script>

<div class="fadeIn dark-background pickerBtn settings" on:click={toggle}>
  {#if muted}
  <VolumeIcon x={10} y={10}/>
  {:else}
  <NoVolumeIcon x={10} y={10}/>
  {/if}
</div>

<style>

</style>