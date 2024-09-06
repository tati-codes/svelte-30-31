import { get } from "svelte/store";
import { currentTaskList, root } from "../../rootStore";
import { editStore, editingTask } from "../../taskEdit";
import type { taskIcon } from "../../typeValidators/taskIcon";
import { clearInterval } from 'worker-timers';
import { isLocked } from "../../../Views/Timer/Timer/TimerButtons/lockedStore";


export const deleteTask = (id: string) => root.update($root => {
  if (get(isLocked)) return $root;
  let tasklist = $root.taskLists.find(task => task.id == $root.selectedId)!;
  let tasks = tasklist.tasks
  if (tasks.length < 3) return $root;
  // if (tasklist.timer) clearInterval(tasklist.timer)
  let taskIndex = tasks.findIndex(task => task.id === id)
  tasks.splice(taskIndex, 1)
  return $root
})