import { get } from "svelte/store";
import { currentTaskList, root } from "../../rootStore";
import { pause } from "../task/pause";
import { start } from "./start";
import { playClearSound, playTaskDoneSound } from "../task/playAudio";
import { clearInterval } from 'worker-timers';

//TODO 
//[ ] add persist 

export const markDone = () => {
  root.update($root => {
  let taskList = $root.taskLists.find(task => task.id == $root.selectedId)!;
  clearInterval(taskList.timer || -1)
  taskList.timer = null
  let tasks = taskList.tasks
  tasks[0].remaining_seconds = tasks[0].length
  tasks.push(tasks.shift()!)

  if (tasks[0].name === "_BREAK") {
    tasks.push(tasks.shift()!)
    if (!taskList.looping) {
      taskList.status = "DONE"
      return $root
    }
  }

  if (taskList.status === "TIMER_ACTIVE") {
    return $root
  }

  taskList.timer = null
  return $root
}, true)
  if (get(currentTaskList).status == "TIMER_ACTIVE") {
    playTaskDoneSound()
    start();
  } else if (get(currentTaskList).status == "DONE") {
    playClearSound()
  }
}