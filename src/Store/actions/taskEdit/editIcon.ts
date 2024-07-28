import { get } from "svelte/store";
import { root } from "../../rootStore";
import { editStore, editingTask } from "../../taskEdit";
import type { taskIcon } from "../../typeValidators/taskIcon";

export const editIcon = (newIcon: taskIcon) => root.update($root => {
  let taskList = $root.taskLists.find(task => task.id == $root.selectedId)!;
  let id = get(editStore).id;
  let taskIndex = taskList.tasks.findIndex(task => task.id === id)
  if (taskIndex != undefined) {
    taskList.tasks[taskIndex].icon = newIcon
  }
  return $root
})