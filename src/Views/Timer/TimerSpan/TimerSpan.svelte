<script>
  import ClockIcon from "../../../lib/Icons/icons/ClockIcon.svelte"
  import { seconds_to_hhmmss } from "../../../lib/Shared/time"
  import { colorp, medium } from "../../../Store/color"
  import { currentTaskList } from "../../../Store/rootStore"
  import { clockOn, currentLayout, currentView } from "../../../Store/settingStore"
  $: length = $currentTaskList.tasks.map((task) => task.remaining_seconds)
                                .reduce((prev, curr) => prev + curr, 0)
  $: hhmmss = seconds_to_hhmmss(length)

</script>

{#if $clockOn && $currentView === "TIMER"}
<div class="topBar">
  <ClockIcon/>
  <span role="timer" class="totalLength" style={colorp($medium)}>
        {hhmmss}
  </span>
</div>
{/if}
  <style>
  .totalLength {
  letter-spacing: -2px;
  font-weight: bolder;
  padding-top: 15px;
  font-size: 35px;
  transition: color 0.325s linear;
  color: black;
  margin-left:-10px;
  user-select: none;
  }
  .topBar {
  position: absolute;
  top: 70px;
  left: -10px;
}

</style>