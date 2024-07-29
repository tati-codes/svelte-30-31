<script lang="ts">
  import NameBar from "./NameBar.svelte"
  import SettingsButton from "./SettingsButton.svelte"
  import TimerListButton from "./TimerListButton.svelte"
</script>



<div class="topBar fadeIn">
  <TimerListButton/>
  <NameBar/>
  <SettingsButton/>
</div>

<style>
.topBar {
  display: flex;
  justify-content: left;
  margin-left: 25px;
  padding-top: 1%;
}
</style>