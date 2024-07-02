import { get } from "svelte/store";
import { root } from "../../rootStore";
import { editStore, editingTask } from "../../taskEdit";
import type { taskIcon } from "../../typeValidators/taskIcon";

export const deleteTask = () => root.update($root => {
  let tasks= $root.taskLists[$root.selected].tasks
  let id = get(editStore).id;
  let taskIndex = tasks.findIndex(task => task.id === id)
  tasks.splice(taskIndex, 1)
  return $root
})