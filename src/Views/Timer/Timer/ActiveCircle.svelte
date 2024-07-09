<script lang="ts">
  import { solve_for_y } from "../../../lib/Shared/solve_for_y"
  import { combineStyles, dark, stroke } from "../../../Store/color"
  import { currentTask } from "../../../Store/rootStore"
  const MAX = 1600
  $: fLen = MAX - solve_for_y($currentTask.length, $currentTask.remaining_seconds, MAX)
  $: bsg = combineStyles(stroke($dark), `stroke-dasharray: ${fLen}, ${MAX}`)
</script>

<circle
fill="none"
style={bsg}
transform="rotate(-90 325 325)"
class="innerCircle circle"
id="innerCircle"
r="250"
cx="325"
cy="325"
stroke-width="90"
></circle>

<style>
  .innerCircle {
  transform: rotate(45);
  transition: all 1.325s linear;
}
.circle {
  stroke: transparent;
  transition: stroke 0.325s linear;
}
</style>