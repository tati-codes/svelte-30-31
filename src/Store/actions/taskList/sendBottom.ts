import { root } from "../../rootStore";
import { pause } from "../task/pause";
import { start } from "./start";

export const sendToBottom = (preserve: boolean = false) => root.update($root => {
  let taskList = $root.taskLists[$root.selected]
  if (taskList.timer) clearInterval(taskList.timer)
  let tasks = taskList.tasks

  if (preserve) tasks.push(tasks.pop()!)
  else {
    let currentTask = tasks.pop()!
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
    start()
    return $root
  }

  taskList.timer = null
  tasks = tasks.map((task => ({...task, computed: null})))
  return $root
})