<script lang="ts">
  import ComputedTime from "./Innards/ComputedTime.svelte"
  import Icon from "./taskCardIcons/TaskBarIcons.svelte"
  import TaskName from "./Innards/TaskName.svelte"
  import Length from "./Innards/Length.svelte"
  import type { Task } from "../../../Store/Task"
  import { bg, dark, fromStr } from "../../../Store/color"
  import { setEditID } from "../../../Store/taskEdit"
  import { setView } from "../../../Store/actions/root/setView"
  import { currentTask } from "../../../Store/rootStore"
  import { currentLayout } from "../../../Store/settingStore"
  import {
    composedGesture,
  } from './Innards/gestures';
  import { combined } from "./Innards/gestures/combinedTaskCard"
  import type { hSwipeCustomEvent } from "./Innards/gestures/hSwipe"
  import { sendToBottom } from "../../../Store/actions/taskList/sendBottom"
  import { deleteTask } from "../../../Store/actions/taskEdit/deleteTask"
  import type { multiTapCustomEvent } from "./Innards/gestures/multiTap"
  import { sendToTop } from "../../../Store/actions/taskList/sendToTop"
  import { copy } from "../../../Store/actions/taskList/copy"
  import { type PressCustomEvent } from "./Innards/gestures"
  import { onEnter } from "../../../lib/Shared/onEnter"
  
  export let task: Task;
  export let index: number;
  $: bsg = bg(fromStr(task.color).dark);
  $: currentbsg = bg(fromStr($currentTask.color).dark);

  let longPressHandler = (e: PressCustomEvent) => {
    setEditID(task.id);
    setView("TASK_EDIT");
  }
  function swipeh(e: hSwipeCustomEvent) {
    if (e.detail.isSwiping) return;
    switch (e.detail.direction) {
      case "left":
        sendToBottom(task.id)
        break
      case "right":
        deleteTask(task.id)
        break
    }
  }
  function multih(e: multiTapCustomEvent) {
    switch (e.detail.touchCount) {
      case 2:
        sendToTop(task.id) //working
        break
      case 3:
        copy(task.id)
        break
    }
  }

</script>

<div 
use:composedGesture={combined}
on:press={longPressHandler}
on:keyup={onEnter(longPressHandler)}   
on:swipe={swipeh}
on:multi={multih}
tabindex={index}
role="button"
aria-label="edit task"
class="taskCard fadeIn" 
style={$currentLayout === "CLASSIC" ? bsg : currentbsg} >
  <Icon type={task.icon || "book"}/>
  <ComputedTime id={task.id} len={task.length}/>
  <TaskName name={task.name}/>
  <Length length={task.length}/>
  <slot />
</div>

<style>
  .taskCard {
    width: 400px;
    height: 105px;
    border-radius: 25px;
    display: grid;
    grid-template-columns: 20% 65% 15%; 
    grid-template-rows: 70% 30%; 
    grid-column-gap: 2vw;

    gap: 0px 0px;
    /* 
    grid-template-areas:
    "icon taskName "
    "length cTimes";

    padding: 12% 18% 12% 4%; */
    /* margin: 0 1.5fr 1.5fr 1.5fr;
    width: 10fr;
    height: 1fr; */
  }
  
  div.taskCard {
    border: 1px solid transparent;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  div.taskCard:hover {
    border-color: #646cff;
  }
  div.taskCard:focus,
  budiv.taskCard:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

</style>