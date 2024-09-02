<script lang="ts">
  import { bg, medium } from "../../../Store/color"
  export let label: number, cb: Function
  $: bsg = bg($medium);
  let offset = label == 0 ? 13 : 3
</script>

<li
style={bsg}
role="button"
aria-label={"press number " + label}
tabindex={label+offset}
class="numpadItem"
on:click={() => cb()}
>
{label}
</li>
