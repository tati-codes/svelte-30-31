import { get } from "svelte/store";
import { root } from "../../rootStore";
import { editStore, editingTask } from "../../taskEdit";
import type { taskIcon } from "../../typeValidators/taskIcon";
import type { Color } from "../../../../types";

export const editColor = (newColor: Color) => root.update($root => {
  let taskList = $root.taskLists.find(task => task.id == $root.selectedId)!;
  let id = get(editStore).id;
  let taskIndex = taskList.tasks.findIndex(task => task.id === id)
  if (taskIndex != undefined) {
    taskList.tasks[taskIndex].color = newColor
  }
  return $root
}, true)