<script lang="ts">
  import { onEnter } from "../../../../lib/Shared/onEnter"
  import { firstPlay, playClick } from "../../../../Store/actions/task/playAudio"
  import { start } from "../../../../Store/actions/taskList/start"
import { dark, fill } from "../../../../Store/color"
  import { firstPlayDone, isFirstPlay } from "./isFirstPlay"
$: filg = fill($dark)
const triangleCB = () => {
  start();
  if ($isFirstPlay) {
    firstPlay();
    firstPlayDone();
  } else {
    playClick();
  }
}
</script>

<g role="button" aria-label="start timer"  on:click={triangleCB} class="innerTask roundFocus" tabindex="7" on:keyup={onEnter(triangleCB)}>
  <path
    class="fillT "
    style={filg}
    d="M250.707 160.778v160.567l160.328-80.403z"
  ></path>
</g>


<style>
  .roundFocus:focus-visible {
    border-radius: 50%;
    outline: 5px solid #0e64d4;
  }
</style>