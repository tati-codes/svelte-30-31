<script lang="ts">
  import { medium, bg } from "../../Store/color"
  import Graphics from "./Graphics.svelte"
  import LayoutBtn from "./LayoutBtn.svelte"
  import LoopBtn from "./LoopBtn.svelte"
  import SettingsTopBar from "./SettingsTopBar.svelte"
  import VolumeBtn from "./VolumeBtn.svelte"
//TODO
//add functionality to buttons
//add lightcolor to the inside of the icons
</script>

<SettingsTopBar/>
<div class="fadeIn settingsView" style={bg($medium)}>
  <div class="innerSettings">
    <span>mute</span>
    <span>button layout</span>
    <span>loop tasks</span>
    <span>graphics</span>
  </div>
  <div class="innerSettings">
    <VolumeBtn />
    <LayoutBtn />
    <LoopBtn />
    <Graphics />
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
</style>