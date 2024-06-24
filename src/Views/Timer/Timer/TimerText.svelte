<script lang="ts">
const isHour = true;
let cLen = "00:00"
let rem = "00:00"
</script>

<text
letter-spacing="0"
x="215"
y={isHour ? "425" : "455"}
class={`${isHour ? "hourTimerText" : "minuteTimerText"} dark-fill fillT fadeIn"`}
>
<tspan x="215" y={isHour ? "425" : "455"} stroke-width="0.265">
  {cLen || rem}
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