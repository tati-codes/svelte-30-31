<script lang="ts">
  import { medium, bg } from "../../Store/color"
  import { clockOn, FXOn, isLooping, isMuted } from "../../Store/settingStore"
  import Graphics from "./Graphics.svelte"
  import LayoutBtn from "./LayoutBtn.svelte"
  import LoopBtn from "./LoopBtn.svelte"
  import SecondaryClock from "./SecondaryClock.svelte"
  import SettingsTopBar from "./SettingsTopBar.svelte"
  import VolumeBtn from "./VolumeBtn.svelte"
</script>

<SettingsTopBar/>
<div class="fadeIn settingsView" style={bg($medium)}>
  <div class="innerSettings">
    <span>{$isMuted ? "unmute" : "mute" }</span>
    <span>button layout</span>
    <span>{$isLooping ?  "don't loop tasks" : "loop tasks" }</span>
    <span>{$FXOn ? "turn off smoothing" : "turn on smoothing"}</span>
  </div>
  <div class="innerSettings">
    <VolumeBtn />
    <LayoutBtn />
    <LoopBtn />
    <Graphics />
  </div>
  <div class="innerSettings "> 
    <span>{$clockOn ? "hide duration" : "show duration"}</span>
  </div>
  <div class="innerSettings singleColumn">
    <SecondaryClock />
  </div>
</div>

<style>
  span{
    flex:1;
  }
.settingsView {
  border-radius: 10px;
  text-align: center;
  margin-left: 24px;
  padding-bottom: 20px;
  padding-top: 5px;
  margin-top: 10px;
}

:global(.innerSettings > .settingsBtn) {
  border: 2px solid rgba(238, 238, 238, 0.26)
}

:global(.pickerBtn) {
  width: 100px;
  background-color: transparent;
  transition: background-color 0.325s linear;
  margin-right: 1%;
  height: 80px;
  border-radius: 1rem;
}

:global(.singleColumn > .settingsBtn) {
  max-width: 25%;
}
</style>