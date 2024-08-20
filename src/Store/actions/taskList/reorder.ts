import type { Task } from "../../Task";
import { root } from "../../rootStore";

export const reorder = (newtasks: Task[], persist: boolean) =>  root.update($root => {
  let taskList = $root.taskLists.find(task => task.id == $root.selectedId)!; 
  taskList.tasks = newtasks
  return $root
}, persist)