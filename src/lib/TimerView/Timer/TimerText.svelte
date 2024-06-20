<script lang="ts">
const isHour = true;
let cLen = "00"
let rem = "00:00"
</script>

<text
letter-spacing="-10"
x="210"
y={isHour ? "425" : "455"}
class={`${isHour ? "hourTimerText" : "minuteTimerText"} dark-fill fillT fadeIn"`}
>
<tspan x="210" y={isHour ? "425" : "455"} stroke-width="0.265">
  {cLen || rem}
</tspan>
</text>