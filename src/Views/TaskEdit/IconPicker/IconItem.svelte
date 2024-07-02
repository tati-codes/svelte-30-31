<script lang="ts">
  import type { TASKBAR_ITEM } from "../../../../types"

export let selected: boolean, icon: TASKBAR_ITEM, change: Function, tabIndex: number;
</script>

<label
class={`iconItem  ${selected ? "selectedIcon" : ""} fadeIn`}
role="tab"
{tabIndex}
for={`${icon}-icon`}
on:click={change}
>
<slot/>
</label>

<style>
  .iconItem {
  text-align: center;
  justify-content: center;
  display: grid;
  background-color: rgba(0, 0, 0, 0);
  -webkit-transition: 0.2s -webkit-filter linear;
  -moz-transition: 0.2s -moz-filter linear;
  -moz-transition: 0.2s filter linear;
  transition: 0.2s all linear;
  user-select: none;
  transform: translateY(30%);
}

:global(.iconItem > svg) {
  transform: scale(2.5);
}
</style>