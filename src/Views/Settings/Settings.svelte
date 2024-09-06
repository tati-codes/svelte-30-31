<script lang="ts">
  import { userAllowedWakeLock, wakeLockSupported } from "../../Store/actions/taskList/wakeLock"
  import { medium, bg } from "../../Store/color"
  import { allowClicks } from "../../Store/rootStore"
  import { clockOn, FXOn, isLooping, isMuted } from "../../Store/settingStore"
  import HelpModal from "../HelpModal.svelte"
  import ClicksBtn from "./ClicksBtn.svelte"
  import Graphics from "./Graphics.svelte"
  import LayoutBtn from "./LayoutBtn.svelte"
  import LoopBtn from "./LoopBtn.svelte"
  import NotificationsBtn from "./NotificationsBtn.svelte"
  import SecondaryClock from "./SecondaryClock.svelte"
  import SettingsTopBar from "./SettingsTopBar.svelte"
  import VolumeBtn from "./VolumeBtn.svelte"
  import WakeLockButton from "./WakeLockButton.svelte"
</script>

<SettingsTopBar/>
<div class="fadeIn settingsView" style={bg($medium)} >
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
    <span>{$wakeLockSupported && $userAllowedWakeLock ? "let screen sleep" : "keep screen on"}</span>
    <span>notifications</span>
    <span>{$allowClicks ? "mute clicks" : "allow clicks"}</span>
  </div>
  <div class="innerSettings ">
    <SecondaryClock />
    <WakeLockButton/>
    <NotificationsBtn/>
    <ClicksBtn/>
  </div>
</div>
<div class="fadeIn settingsView" style={bg($medium)}>
  <HelpModal/>
</div>
<div class="fadeIn settingsView" style={bg($medium)}>
  <h1>Made by <a href="https://github.com/tati-codes">Tati</a>. Leave a <a href="https://ko-fi.com/taticodes">tip</a> if you like this.</h1>
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