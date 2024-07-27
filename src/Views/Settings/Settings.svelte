<script lang="ts">
  import { medium, bg } from "../../Store/color"
  import LayoutBtn from "./LayoutBtn.svelte"
  import LoopBtn from "./LoopBtn.svelte"
  import VolumeBtn from "./VolumeBtn.svelte"
//TODO
//add functionality to buttons
//add lightcolor to the inside of the icons
</script>

<div class="fadeIn settingsView" style={bg($medium)}>
  <div class="innerSettings">
    <VolumeBtn />
    <LayoutBtn />
    <LoopBtn />
  </div>
</div>

<style>
.settingsView {
  border-radius: 10px;
  text-align: center;
  margin-left: 24px;
  padding-bottom: 30px;
  padding-top: 30px;
  margin-top: 25px;
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