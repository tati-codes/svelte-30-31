<script lang="ts">
  import { start } from "../../../../Store/actions/taskList/start"
import { dark, fill } from "../../../../Store/color"
$: filg = fill($dark)
</script>

<g on:click={start} class="innerTask">
  <path
    class="fillT"
    style={filg}
    d="M250.707 160.778v160.567l160.328-80.403z"
  ></path>
</g>