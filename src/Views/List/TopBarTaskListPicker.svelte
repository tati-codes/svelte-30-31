<script lang="ts">
  import {bg, medium } from "../../Store/color"
  import SettingsButton from "../Timer/TopBar/GoSettings.svelte"
  import TimerListButton from "../Timer/TopBar/GoListPicker.svelte"

</script>



<div class="topBar">
  <TimerListButton/>
  <div style={bg($medium)} class="tName bgT fadeIn" >
    <span>Select your tasklist</span>
  </div>
    <SettingsButton/>
</div>


<style>
  div.tName{
    text-align: center;
  }

</style>