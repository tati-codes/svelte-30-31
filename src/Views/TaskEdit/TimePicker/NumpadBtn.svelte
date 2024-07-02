<script lang="ts">
  import { bg, medium } from "../../../Store/color"
  export let label: string, cb: Function
  $: bsg = bg($medium);
</script>

<li
style={bsg}
aria-selected="true"
tabindex={0}
class="numpadItem"
on:click={() => cb()}
>
{label}
</li>
