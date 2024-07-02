<script lang="ts">
  import { bg, medium } from "../../../Store/color"
  export let label: number, cb: Function
  $: bsg = bg($medium);
  let offset = label == 0 ? 13 : 3
</script>

<li
style={bsg}
tabindex={label+offset}
class="numpadItem"
on:click={() => cb()}
>
{label}
</li>
