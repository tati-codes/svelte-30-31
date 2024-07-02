import { get } from "svelte/store";
import { root } from "../../rootStore";
import { editStore, editingTask } from "../../taskEdit";

export const editLength = (nLen: number, remaining: number = -1) => root.update($root => {
  let taskList = $root.taskLists[$root.selected]
  let id = get(editStore).id;
  let taskIndex = taskList.tasks.findIndex(task => task.id === id)
  if (taskIndex != undefined) {
    taskList.tasks[taskIndex].length = nLen
  }
  if (remaining > -1) {
    taskList.tasks[taskIndex].remaining_seconds = remaining
  }
  return $root
})
