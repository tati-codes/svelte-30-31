import { get } from "svelte/store";
import { root } from "../../rootStore";
import { editStore, editingTask } from "../../taskEdit";

const editLength = (nLen: number) => root.update($root => {
  let taskList = $root.taskLists[$root.selected]
  let id = get(editStore).id;
  let taskIndex = taskList.tasks.findIndex(task => task.id === id)
  if (taskIndex != undefined) {
    taskList.tasks[taskIndex].length = nLen
  }
  return $root
})