<script lang="ts">
  import { bg, medium } from "../../../Store/color"
  $: bsg = bg($medium);
  </script>

<div style={bsg} class="numpadItem" >
</div>