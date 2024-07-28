import type { Task } from "../../Task";
import { root } from "../../rootStore";

export const addTask = (task: Task) => root.update($root => {
  let taskList = $root.taskLists.find(task => task.id == $root.selectedId)!;
  let break_index = taskList.tasks.findIndex((task) => task.name === "_BREAK") 
  taskList.tasks.splice(break_index, 0, task)
  return $root
})