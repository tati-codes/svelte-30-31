<script lang="ts">
import { formatSeconds } from "../../../lib/Shared/time"
let placeholder = "00:00"
import { currentTask } from "../../../Store/rootStore"
import { fill, dark } from "../../../Store/color"
$: bsg = fill($dark)
$: isHour = $currentTask.remaining_seconds >= 3600
$: cLen = formatSeconds($currentTask.remaining_seconds)
</script>

<text
letter-spacing="0"
x="215"
y={isHour ? "425" : "455"}
class={`${isHour ? "hourTimerText" : "minuteTimerText"} fillT fadeIn"`}
style={bsg}
>
<tspan x={isHour ? "177" : "190"} y={isHour ? "425" : "455"} stroke-width="0.265">
  {cLen || placeholder}
</tspan>
</text>

<style>
  .minuteTimerText {
  font-size: 125px;
  word-spacing: 0%;
  user-select: none;
}
.hourTimerText {
  font-size: 95px;
  word-spacing: 0%;
  user-select: none;
}
</style>