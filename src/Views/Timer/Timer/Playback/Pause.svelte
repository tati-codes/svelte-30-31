<script lang="ts">
  import { onEnter } from "../../../../lib/Shared/onEnter"
  import { pause } from "../../../../Store/actions/task/pause"
  import { playClick } from "../../../../Store/actions/task/playAudio"
  import { dark, fill } from "../../../../Store/color"

$: filg = fill($dark)
const pauseCB = () => {
  pause();
  playClick()
}
</script>

<g role="button" aria-label="pause timer" on:click={pauseCB} class="innerTask roundFocus"  tabindex="7" on:keyup={onEnter(pause)}>
  <path
    class="fillT "
    style={filg}
    d="M245 160h60v160H245zm140 "
  ></path>
  <path
    class="fillT"
    style={filg}
    d="M345 160h60v160H345zm140 "
  ></path>
</g>


<style>
  .roundFocus:focus-visible {
    border-radius: 50%;
    outline: 5px solid #0e64d4;
  }
</style>