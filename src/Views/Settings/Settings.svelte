<script lang="ts">
  import LayoutBtn from "./LayoutBtn.svelte"
  import LoopBtn from "./LoopBtn.svelte"
  import VolumeBtn from "./VolumeBtn.svelte"


</script>

<div class="fadeIn settingsView medium-background">
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
  max-width: 465px;
  margin-left: 24px;
  padding-bottom: 30px;
  padding-top: 30px;
  margin-top: 25px;
}

.innerSettings {
  display: flex;
  justify-content: center;
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