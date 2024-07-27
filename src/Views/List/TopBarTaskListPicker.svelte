<script lang="ts">
  import {bg, medium } from "../../Store/color"
  import SettingsButton from "../Timer/TopBar/SettingsButton.svelte"
  import TimerListButton from "../Timer/TopBar/TimerListButton.svelte"

</script>



<div class="topBar">
  <TimerListButton/>
  <div style={bg($medium)} class="tName bgT fadeIn" >
    <span>Select your tasklist</span>
  </div>
    <SettingsButton/>
</div>

<style>
.topBar {
  display: flex;
  justify-content: left;
  margin-left: 25px;
  padding-top: 1%;
}

.tName {
  height: 80px;
  width: 420px;

  padding-right: 1%;
  padding-left: 1%;
  font-size: 3rem;
  margin-right: 1%;
  margin-left: 1%;
  overflow: hidden;
  user-select: none;
}
</style>