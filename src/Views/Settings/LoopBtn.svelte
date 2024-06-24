<script lang="ts">
  import LoopIcon from "../../lib/Icons/icons/LoopIcon.svelte"
  import NoLoopIcon from "../../lib/Icons/icons/NoLoopIcon.svelte"


  let looping = false
  let toggleLoop = () => null
  // let {dispatch, looping} = useTimerStore(state => state)
  // let toggleLoop = () => dispatch("toggleLoop", null)
</script>

<div class="fadeIn dark-background pickerBtn settings" on:click={toggleLoop}>
  <svg>
    {#if looping}
      <NoLoopIcon x={15} y={6}/> 
    {:else}
      <LoopIcon x={15} y={6} />
    {/if}
  </svg>
</div>
