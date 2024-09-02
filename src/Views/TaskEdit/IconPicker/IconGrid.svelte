<script lang="ts">
  import { fill, bg, medium, light, stroke } from "../../../Store/color"
  import { IconRegistry } from "../../Timer/TaskCard/taskCardIcons/IconRegistry"
  import IconItem from "./IconItem.svelte"
  import { editingTask } from "../../../Store/taskEdit";
  import type { TASKBAR_ITEM } from "../../../../types"
  import Icon from "../../../lib/Icons/Icon.svelte"
  import { onEnter } from "../../../lib/Shared/onEnter"
  import { editIcon } from "../../../Store/actions/taskEdit/editIcon"
  import type { taskIcon } from "../../../Store/typeValidators/taskIcon"

  $: bsg = bg($medium);
  $: lightstroke = stroke($light);
  $: fillg = fill("transparent")
  $: stg = `${lightstroke};${fillg}`
  let keys: taskIcon[] = Object.keys(IconRegistry).filter(
  (item) => item !== "close" && item !== "backspace" && item !== "add" 
) as taskIcon[]

</script>
  
  
<div 
style={bsg}
id="icon-panel"
role="tabpanel"
aria-labelledby="icons"
class="iconPicker">
{#each keys as key, i}
  <IconItem label={`select ${key} icon`} selected={key == $editingTask?.icon} icon={key} tabIndex={i+3}>
    <Icon style={stg}  width={18} height={18} viewbox="0 0 24 24">
      <svelte:component this={IconRegistry[key]}/>
    </Icon>
  </IconItem>
{/each}
</div>

<style>
  .iconPicker {
  z-index: 1;
  height: 400px;
  width: 480px;
  margin-left: 25px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  }

</style>