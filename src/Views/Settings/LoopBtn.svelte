<script lang="ts">
  import LoopIcon from "../../lib/Icons/icons/LoopIcon.svelte"
  import NoLoopIcon from "../../lib/Icons/icons/NoLoopIcon.svelte"
  import SettingsBtn from "../../lib/Shared/SettingsBtn.svelte"
  import PickerBtn from "./PickerBtn.svelte"


  let looping = false
  let toggleLoop = () => null
  // let {dispatch, looping} = useTimerStore(state => state)
  // let toggleLoop = () => dispatch("toggleLoop", null)
</script>

<SettingsBtn cb={toggleLoop}>
    {#if looping}
    <NoLoopIcon x={15} y={6}/> 
    {:else}
    <LoopIcon x={15} y={6} />
    {/if}
</SettingsBtn>  