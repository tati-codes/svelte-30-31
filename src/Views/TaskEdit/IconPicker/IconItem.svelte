<script lang="ts">
  import type { TASKBAR_ITEM } from "../../../../types"
  import { onEnter } from "../../../lib/Shared/onEnter"
  import { editIcon } from "../../../Store/actions/taskEdit/editIcon"
  import type { taskIcon } from "../../../Store/typeValidators/taskIcon"

export let selected: boolean, icon: taskIcon, tabIndex: number, label:string;
</script>

<div
class={`iconItem  ${selected ? "selectedIcon" : ""} fadeIn`}
role="button"
aria-selected={selected}
{tabIndex}
aria-label={label}
for={`${icon}-icon`}
on:keyup={onEnter(() => editIcon(icon))}
on:click={editIcon(icon)}
>
<slot/>
</div>

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
  display: block;
  padding: 14px 21px;
  border-radius: 2px 2px 0 0;
  font-size: 20px;
  font-weight: normal;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  -webkit-transition: 0.2s -webkit-filter linear;
  -moz-transition: 0.2s -moz-filter linear;
  -moz-transition: 0.2s filter linear;
  transition: 0.2s filter linear;
  transition: all 0.2s linear;

}

.iconItem:hover {
  filter: brightness(80%) drop-shadow(1px 1px rgba(0,0,0,0.5));
}

.selectedIcon {
  filter: brightness(110%) drop-shadow(4px 4px rgba(0,0,0,0.5));
}


.selectedIcon:hover {
  filter: brightness(110%) drop-shadow(2px 2px rgba(0,0,0,0.5));
}
:global(.iconItem > svg) {
  transform: scale(2.5);
}
</style>