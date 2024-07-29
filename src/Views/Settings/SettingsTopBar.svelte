<script lang="ts">
  import {bg, medium } from "../../Store/color"
  import SettingsButton from "../Timer/TopBar/SettingsButton.svelte"
  import TimerListButton from "../Timer/TopBar/TimerListButton.svelte"
</script>



<div class="topBar">
  <TimerListButton/>
  <div style={bg($medium)} class="tName bgT fadeIn" >
    <span>Settings</span>
  </div>
    <SettingsButton/>
</div>

<style>
  div.tName{
    text-align: center;
  }

</style>