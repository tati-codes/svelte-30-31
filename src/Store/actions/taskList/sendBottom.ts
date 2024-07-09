import { get } from "svelte/store";
import { currentTaskList, root } from "../../rootStore";
import { pause } from "../task/pause";
import { start } from "./start";

export const sendToBottom = (preserve: boolean = false) => {
  root.update($root => {
  let taskList = $root.taskLists[$root.selected]
  if (taskList.timer) clearInterval(taskList.timer)
  let tasks = taskList.tasks

  if (preserve) {
    let currentTask = tasks.shift()!
    currentTask.status = "INACTIVE"
    tasks.push(currentTask)
  } else {
    let currentTask = tasks.shift()!
    currentTask.status = "INACTIVE"
    currentTask.remaining_seconds = currentTask?.length
    tasks.push(currentTask)
  }

  if (tasks[0].name === "_BREAK") {
    tasks.push(tasks.shift()!)
    if (!taskList.looping) {
      pause()
      // playClear()
    }
    tasks = tasks.map((task => ({...task, computed: null})))
    taskList.status = "IDLE"
    return $root
  }

  if (taskList.status === "TIMER_ACTIVE") {
    //playTaskDone
    return $root
  }

  taskList.timer = null
  taskList.tasks = tasks.map((task => ({...task, computed: null})))
  return $root
})
  if (get(currentTaskList).status == "TIMER_ACTIVE") {
    //play sound
    start();
  }
}