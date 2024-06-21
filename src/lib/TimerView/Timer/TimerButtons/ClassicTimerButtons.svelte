<script lang="ts">
  import CheckMarkIcon from "../../../Icons/icons/CheckMarkIcon.svelte"
  import LockIcon from "../../../Icons/icons/LockIcon.svelte"
  import OpenLockIcon from "../../../Icons/icons/OpenLockIcon.svelte"
  import SendToBottomIcon from "../../../Icons/icons/SendToBottomIcon.svelte"
  import TrashIcon from "../../../Icons/icons/TrashIcon.svelte"
  import BtnLabel from "./BtnLabel.svelte"
  import TimerBtn from "./TimerBtn.svelte"

const isLocked = true;
const done = () => null;
const send_to_bottom = done;
const toggleLock = done;
const  del = done;
const  add = done
const  take = done;
// let label = labelMaker(remaining)
let label = 30;
</script>


<TimerBtn position="top" cb={done}>
  <CheckMarkIcon x={300} y={45} />
</TimerBtn>
<TimerBtn position="topLeft" cb={send_to_bottom}>
  <SendToBottomIcon x={115} y={97} />
</TimerBtn>

{#if isLocked}
  <TimerBtn position="topRight" cb={del}>
    <TrashIcon x={462} y={110}  />
  </TimerBtn>
{/if}
<TimerBtn position="bottom" cb={toggleLock}>

{#if isLocked}
  <LockIcon x={300} y={537} height={70}/>
{:else}
  <OpenLockIcon x={295} y={537} height={70}/>
{/if}
</TimerBtn>

<TimerBtn position="bottomRight" cb={add}>
  <BtnLabel label={`+${label}m`} x={label > 5 ? 522.5 : 525} y={label > 5 ? 415 : 420} size={label > 5 ? "40px" : "48px"}/>
</TimerBtn>
<TimerBtn position="bottomLeft" cb={take}>
  <BtnLabel x={label > 5 ? 45 : 50} y={label > 5 ? 415 : 420} label={`-${label}m`} size={label > 5 ? "40px" : "48px"} />
</TimerBtn>
