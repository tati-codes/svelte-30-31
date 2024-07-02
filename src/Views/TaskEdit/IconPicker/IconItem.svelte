<script lang="ts">
  import type { TASKBAR_ITEM } from "../../../../types"
  import { onEnter } from "../../../lib/Shared/onEnter"
  import { editIcon } from "../../../Store/actions/taskEdit/editIcon"
  import type { taskIcon } from "../../../Store/typeValidators/taskIcon"

export let selected: boolean, icon: taskIcon, tabIndex: number;
//FIXME make this not a label
</script>

<label
class={`iconItem  ${selected ? "selectedIcon" : ""} fadeIn`}
role="button"
{tabIndex}
for={`${icon}-icon`}
on:keyup={onEnter(() => editIcon(icon))}
on:click={editIcon(icon)}
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

.selectedIcon {
  filter: brightness(110%) drop-shadow(2px 2px rgba(0,0,0,0.5));
}

.selectedIcon:hover {
  filter: brightness(110%) drop-shadow(2px 2px rgba(0,0,0,0.5));
}
:global(.iconItem > svg) {
  transform: scale(2.5);
}
</style>