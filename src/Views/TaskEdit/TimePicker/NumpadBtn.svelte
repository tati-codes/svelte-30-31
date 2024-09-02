<script lang="ts">
  import { onEnter } from "../../../lib/Shared/onEnter"
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
class="numpad-item"
on:keyup={onEnter(cb)}
on:click={() => cb()}
>
{label}
</li>

<style>
  .numpad-item {
    text-align: center;
    justify-content: center;
    display: grid;
    padding-top: 13%;
    background-color: rgba(0, 0, 0, 0);
    -webkit-transition: 0.2s -webkit-filter linear;
    -moz-transition: 0.2s -moz-filter linear;
    -moz-transition: 0.2s filter linear;
    transition: 0.2s filter linear;
    user-select: none;
    font-size: 36px;
    font-weight: bolder;
  }  
  .numpad-item:hover {
  filter: brightness(85%);
}
.numpad-item:active {
  filter: brightness(120%);
}
  </style>