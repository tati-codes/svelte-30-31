<script lang="ts">
  import { solve_for_y } from "../../../lib/Shared/solve_for_y"
  import { combineStyles, dark, stroke } from "../../../Store/color"
  import { currentTask } from "../../../Store/rootStore"
  import { FXOn } from "../../../Store/settingStore"
  const MAX =   1600
  $: fLen = MAX - solve_for_y($currentTask.length, $currentTask.remaining_seconds, MAX)
  // $: console.log(fLen);
  $: bsg = combineStyles(stroke($dark), `stroke-dasharray: ${fLen}, ${MAX}`)
</script>


  <circle
  fill="none"
  style={bsg}
  transform="rotate(-90 325 325)"
  class={$FXOn ? "innerCircle circle" : "circle"}
  id="innerCircle"
  r="250"
  cx="325"
  cy="325"
  stroke-width="90"
  ></circle>

<style>
  .circle {
    stroke: transparent;
    transition: stroke 0.325s linear;
  }
  .innerCircle {
  transform: rotate(45);
  transition: stroke-dasharray 1.1s linear;
}
</style>