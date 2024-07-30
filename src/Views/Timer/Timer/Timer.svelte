<script lang="ts">
  import { currentLayout } from "../../../Store/settingStore"
  import ActiveCircle from "./ActiveCircle.svelte"
  import BgCircle from "./BGCircle.svelte"
  import Playback from "./Playback.svelte"
  import ClassicTimerButtons from "./TimerButtons/ClassicTimerButtons.svelte"
  import TatiTimerButtons from "./TimerButtons/TatiTimerButtons.svelte"
  import TimerText from "./TimerText.svelte"

</script>

<svg
xmlns="http://www.w3.org/2000/svg"
width="650"
height="650"
class="timer fadeIn"
>
<BgCircle/>
<ActiveCircle />
<Playback />
<TimerText />
{#if $currentLayout === "CLASSIC"}
  <ClassicTimerButtons/>
{:else}
  <TatiTimerButtons/>
{/if}
</svg>

<style>
.timerCircle {
  transform: translate(-10%, -15%) scale(0.8);
  /* z-index: -1;
  position: relative; */
}
</style>