<script lang="ts">
import { formatSeconds } from "../../../../lib/Shared/time"
export let length = 0
</script>

<div class="length">{formatSeconds(length)}</div>

<style>
  .length {
    grid-area: length;
    font-size: 22px;
    margin-top: -9%;
    margin-left: 25%;
    margin-bottom: 12%;
  }
</style>