import { get } from "svelte/store";
import { currentTaskList, root } from "../../rootStore";
import { pause } from "../task/pause";
import { start } from "./start";
import { clearInterval } from 'worker-timers';

//TODO 
//[ ] add persist 

export const sendToBottom = (id: string) => {
  root.update($root => {
    let taskList = $root.taskLists.find(task => task.id == $root.selectedId)!;
    clearInterval(taskList.timer || -1)
    taskList.timer = null
    let tasks = taskList.tasks
    let currentIndex = taskList.tasks.findIndex(task => task.id === id)
    if (!tasks[currentIndex]) return $root
    let breakIndex = taskList.tasks.findIndex(task => task.name === "_BREAK")
    let [currentTask] = tasks.splice(currentIndex, 1) 
    tasks.splice(breakIndex - 1,0, currentTask)

    if (tasks[0].name === "_BREAK") {
      tasks.push(tasks.shift()!)
      if (!taskList.looping) {
        // playClear()
        taskList.status = "DONE"
      }
      return $root
    }

    if (taskList.status === "TIMER_ACTIVE") {
      //playTaskDone
      return $root
    }

    return $root

  }, true)
  if (get(currentTaskList).status == "TIMER_ACTIVE") {
    start();
  }
}