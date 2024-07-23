<script lang="ts">
  import CheckMarkIcon from "../../../../lib/Icons/icons/CheckMarkIcon.svelte"
  import LockIcon from "../../../../lib/Icons/icons/LockIcon.svelte"
  import OpenLockIcon from "../../../../lib/Icons/icons/OpenLockIcon.svelte"
  import SendToBottomIcon from "../../../../lib/Icons/icons/SendToBottomIcon.svelte"
  import TrashIcon from "../../../../lib/Icons/icons/TrashIcon.svelte"
  import BtnLabel from "./BtnLabel.svelte"
  import TimerBtn from "./TimerBtn.svelte"
  import { stroke, light, fill } from "../../../../Store/color"
  import { labelMaker } from "../../../../lib/Shared/label_maker"
  import { currentTask } from "../../../../Store/rootStore"
  import { addTime } from "../../../../Store/actions/task/addTime"
  import { takeTime } from "../../../../Store/actions/task/takeTime"
  import { deleteTask } from "../../../../Store/actions/taskEdit/deleteTask"
  import { sendToBottom } from "../../../../Store/actions/taskList/sendBottom"
  import { markDone } from "../../../../Store/actions/taskList/markDone"

$: fillg = fill($light)
let isLocked = true;
const toggleLock = () => {
  isLocked = !isLocked
};
$: del = () => deleteTask($currentTask.id);
$: label = labelMaker($currentTask.remaining_seconds)
</script>


<TimerBtn position="top" cb={markDone}>
  <CheckMarkIcon fill={$light} x={300} y={45} />
</TimerBtn>

<TimerBtn position="topLeft" cb={sendToBottom}>
  <SendToBottomIcon  style={$light} x={115} y={97} />
</TimerBtn>

{#if isLocked}
  <TimerBtn position="topRight" cb={del}>
    <TrashIcon style={fillg}  x={462} y={110}  />
  </TimerBtn>
{/if}


<TimerBtn position="bottom" cb={toggleLock}>
{#if isLocked}
  <LockIcon x={300} style={fillg} y={537} height={70}/>
{:else}
  <OpenLockIcon x={295} style={fillg} y={537} height={70}/>
{/if}
</TimerBtn>

<TimerBtn position="bottomRight" cb={addTime}>
  <BtnLabel style={fillg} label={`+${label}m`} x={label > 5 ? 522.5 : 525} y={label > 5 ? 415 : 420} size={label > 5 ? "40px" : "48px"}/>
</TimerBtn>
<TimerBtn position="bottomLeft" cb={takeTime}>
  <BtnLabel style={fillg} x={label > 5 ? 45 : 50} y={label > 5 ? 415 : 420} label={`-${label}m`} size={label > 5 ? "40px" : "48px"} />
</TimerBtn>
