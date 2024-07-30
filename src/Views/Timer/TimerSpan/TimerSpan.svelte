<script>
  import ClockIcon from "../../../lib/Icons/icons/ClockIcon.svelte"
  import { seconds_to_hhmmss } from "../../../lib/Shared/time"
  import { colorp, medium } from "../../../Store/color"
  import { currentTaskList } from "../../../Store/rootStore"
  import { clockOn, currentLayout } from "../../../Store/settingStore"
  $: length = $currentTaskList.tasks.map((task) => task.remaining_seconds)
                                .reduce((prev, curr) => prev + curr, 0)
  $: hhmmss = seconds_to_hhmmss(length)

</script>

{#if $clockOn}
<div class="topBar">
  <ClockIcon/>
  <span class="totalLength" style={colorp($medium)}>
        {hhmmss}
  </span>
</div>
{/if}
  <style>
  .totalLength {
  
  letter-spacing: -4px;
  font-weight: bolder;
  padding-top: 1px;
  padding-top: 0.5vmax;
  font-size: 2.5rem;
  transition: color 0.325s linear;
  color: black;
  user-select: none;
  }
  .topBar {
  scale: 0.9;
  position: absolute;
  top: 3vmax;
}
 :global(.topBar > .clockIcon) {
  margin-right: -5%;

}
</style>