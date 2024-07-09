<script lang="ts">
  import { medium, stroke } from "../../../Store/color"
  $: bsg = stroke($medium)

</script>

<circle
fill="none"
style={bsg}
class="circle"
r="250"
cx="325"
cy="325"
stroke-width="90"
stroke="#d0d5db"
></circle>