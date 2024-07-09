import { get } from "svelte/store";
import { currentTaskList, root } from "../../rootStore";
import { pause } from "../task/pause";
import { start } from "./start";

export const markDone = () => {
  root.update($root => {
  let taskList = $root.taskLists[$root.selected]
  clearInterval(taskList.timer || undefined)
  taskList.timer = null
  let tasks = taskList.tasks
  tasks[0].remaining_seconds = tasks[0].length
  tasks.push(tasks.shift()!)

  if (tasks[0].name === "_BREAK") {
    tasks.push(tasks.shift()!)
    if (!taskList.looping) {
      taskList.status = "DONE"
      return $root
      // playClear()
    }
  }

  if (taskList.status === "TIMER_ACTIVE") {
    //playTaskDone
    return $root
  }

  taskList.timer = null
  return $root
})
  if (get(currentTaskList).status == "TIMER_ACTIVE") {
    //play sound
    start();
  }
}