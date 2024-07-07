import type { Task } from "../../Task";
import { root } from "../../rootStore";

export const end = (task: Task) => root.update($root => {
  let taskList = $root.taskLists[$root.selected]
  let break_index = taskList.tasks.findIndex((task) => task.name === "_BREAK") 
  taskList.tasks.splice(break_index, 0, task)
  return $root
})