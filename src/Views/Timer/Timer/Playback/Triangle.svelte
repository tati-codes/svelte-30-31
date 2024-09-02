<script lang="ts">
  import { onEnter } from "../../../../lib/Shared/onEnter"
  import { start } from "../../../../Store/actions/taskList/start"
import { dark, fill } from "../../../../Store/color"
$: filg = fill($dark)
</script>

<g on:click={start} class="innerTask roundFocus" tabindex="7" on:keyup={onEnter(start)}>
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