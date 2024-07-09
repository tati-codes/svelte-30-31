<script lang="ts">
  import { pause } from "../../../../Store/actions/task/pause"
  import { dark, fill } from "../../../../Store/color"

$: filg = fill($dark)

</script>

<g on:click={pause} class="innerTask" >
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