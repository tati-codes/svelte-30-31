<script lang="ts">
  import { light } from "../../Store/color"

  export let name = "<unnamed tasklist>"
</script>
<text
    x="28"
    y="24"
    fill={$light}
    class="fillT"
    stroke-width="0.265"
  >
    <tspan x="28" y="24.5" stroke-width="0.265" font-size="16">
      {name}
    </tspan>
  </text>
