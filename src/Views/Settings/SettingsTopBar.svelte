<script lang="ts">
  import {bg, medium } from "../../Store/color"
  import GoSettings from "../Timer/TopBar/GoSettings.svelte"
  import GoListPicker from "../Timer/TopBar/GoListPicker.svelte"
</script>



<div class="topBar">
  <GoListPicker/>
  <div style={bg($medium)} class="tName bgT fadeIn" >
    <span>Settings</span>
  </div>
    <GoSettings/>
</div>

<style>
  div.tName{
    text-align: center;
  }

</style>