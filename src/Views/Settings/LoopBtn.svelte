<script lang="ts">
  import LoopIcon from "../../lib/Icons/icons/LoopIcon.svelte"
  import NoLoopIcon from "../../lib/Icons/icons/NoLoopIcon.svelte"
  import SettingsBtn from "../../lib/Shared/SettingsBtn.svelte"
  import { toggleLoop } from "../../Store/actions/taskList/toggleLoop"
  import { isLooping } from "../../Store/settingStore"
  import { light } from "../../Store/color"

  // let {dispatch, looping} = useTimerStore(state => state)
  // let toggleLoop = () => dispatch("toggleLoop", null)
</script>

<SettingsBtn cb={toggleLoop}>
    {#if $isLooping}
    <NoLoopIcon x={15} y={6}  fill={$light}/> 
    {:else}
    <LoopIcon x={15} y={6} fill={$light}/>
    {/if}
</SettingsBtn>  