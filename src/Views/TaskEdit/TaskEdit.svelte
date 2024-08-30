  <script lang="ts">
  import Name from "./TaskEdit/Name.svelte"
  import Time from "./TaskEdit/Time.svelte"
  import { editingTask, editStore } from "../../Store/taskEdit"
  import Tabs from "./TaskEdit/Tabs.svelte"
  import ColorPicker from "./ColorPicker.svelte"
  import TimePicker from "./TimePicker/TimePicker.svelte"
  import BottomBar from "./TaskEdit//BottomBar.svelte"
  import IconGrid from "./IconPicker/IconGrid.svelte"
  import { seconds_to_hhmmss } from "../../lib/Shared/time"
  import { onNumPress } from "../../lib/Shared/onNumPress"
  let len = seconds_to_hhmmss($editingTask!.length)
</script>

<div class="modal" on:keypress={(e) => (len = onNumPress(e, len))}>
  <div class="modalTopBar" tabindex="-1" >
    <Name/>
    <Time {len}/>
  </div>
  <Tabs/>
  {#if $editStore.editView === "COLOR"}
  <ColorPicker/>    
  {:else if $editStore.editView === "ICON"}
  <IconGrid/>
  {:else if $editStore.editView === "NUMPAD"}
  <TimePicker bind:len/> 
  {/if}
  <BottomBar/>
</div>
  
<style>
  .modal {
    z-index: 0;
  }
  :global(.background-darken) {
  -webkit-transition: 0.2s -webkit-filter linear;
  -moz-transition: 0.2s -moz-filter linear;
  -moz-transition: 0.2s filter linear;
  transition: 0.2s filter linear;
  transition: 0.2s all linear;
}
  .modalTopBar {
    display: flex;
    justify-content: left;
    margin-left: 25px;
    padding-top: 1%;
    width: 893px;
    height:100%;
  }

</style>