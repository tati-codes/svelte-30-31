<script lang="ts">
import { formatSeconds } from "../../../../lib/Shared/time"
export let length = 0
</script>

<div class="length">{formatSeconds(length)}</div>

<style>
  .length {
    grid-area: 2 / 1 / 3 / 2; 
    font-size: 22px;
    margin-top: -9%;
    margin-left: 25%;
    margin-bottom: 12%;
  }
</style>