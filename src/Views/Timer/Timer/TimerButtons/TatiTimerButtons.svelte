<script>
  import SendToBottomIcon from "../../../../lib/Icons/icons/SendToBottomIcon.svelte"
  import { labelMaker } from "../../../../lib/Shared/label_maker"
  import { addTime } from "../../../../Store/actions/task/addTime"
  import { takeTime } from "../../../../Store/actions/task/takeTime"
  import { sendToBottom } from "../../../../Store/actions/taskList/sendBottom"
  import { fill, light } from "../../../../Store/color"
  import { currentTask } from "../../../../Store/rootStore"
  import BtnLabel from "./BtnLabel.svelte"
  
  import TimerBtn from "./TimerBtn.svelte"
  $: fillg = fill($light)
  $: label = labelMaker($currentTask.remaining_seconds)
  $: sendtobot = () => sendToBottom($currentTask.id)
</script>

<TimerBtn position="midLeft" cb={addTime}>
  <BtnLabel style={fillg} label={`+${label}m`} x={522} y={262} size={label > 5 ? "40px" : "48px"} />
</TimerBtn>
<TimerBtn position="midRight" cb={takeTime}>
  <BtnLabel style={fillg} x={48} y={262} label={`-${label}m`} size={label > 5 ? "40px" : "48px"} />
</TimerBtn>

<TimerBtn position="bottom" cb={sendtobot}>
  <SendToBottomIcon style={$light} x={284} y={534} />
</TimerBtn>