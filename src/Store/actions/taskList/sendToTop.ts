import { get } from "svelte/store";
import { currentTaskList, root } from "../../rootStore";
import { start } from "./start";

export const sendToTop = (id: string) => {
  root.update($root => {
    let taskList = $root.taskLists.find(task => task.id == $root.selectedId)!;
    clearInterval(taskList.timer || undefined)
    taskList.timer = null
    let tasks = taskList.tasks
    let currentIndex = taskList.tasks.findIndex(task => task.id === id)
    if (!tasks[currentIndex]) return $root
    let [currentTask] = tasks.splice(currentIndex, 1) 
    tasks.splice(0,0, currentTask)
    return $root
  })
  if (get(currentTaskList).status == "TIMER_ACTIVE") {
    start();
  }
}