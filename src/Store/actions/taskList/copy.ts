import { get } from "svelte/store";
import { currentTaskList, root } from "../../rootStore";
import { start } from "./start";
import { Task } from "../../Task";

export const copy = (id: string) => {
  root.update($root => {
    let taskList = $root.taskLists.find(task => task.id == $root.selectedId)!;
    let tasks = taskList.tasks
    let currentIndex = taskList.tasks.findIndex(task => task.id === id)
    if (!tasks[currentIndex]) return $root
    let currentTask = taskList.tasks[currentIndex]
    tasks.splice(currentIndex+1,0, new Task(currentTask.name, currentTask.length, currentTask.icon))
    return $root
  })
}