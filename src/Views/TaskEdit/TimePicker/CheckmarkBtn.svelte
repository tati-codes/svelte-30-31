<script lang="ts">
  import { bg, medium } from "../../../Store/color"
  $: bsg = bg($medium);
  </script>

<div role="button" aria-label="confirm task time" style={bsg} class="numpadItem" >
</div>