<script lang="ts">
  import {bg, medium } from "../../Store/color"
  import GoSettings from "../Timer/TopBar/GoSettings.svelte"
  import GoListPicker from "../Timer/TopBar/GoListPicker.svelte"
  import { setView } from "../../Store/actions/root/setView"
  import { onEnter } from "../../lib/Shared/onEnter"
  let goTimer = () => setView("TIMER")
</script>



<div class="topBar">
  <GoListPicker/>
  <div tabindex={1} style={bg($medium)} class="tName bgT fadeIn" on:click={goTimer} on:keyup={onEnter(goTimer)}   
  >
    <span>Settings</span>
  </div>
    <GoSettings/>
</div>

<style>
  div.tName{
    text-align: center;
  }

</style>