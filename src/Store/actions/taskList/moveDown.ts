import { arrayMoveDown, arrayMoveUp } from "../../../lib/Shared/arrayMove";
import { root } from "../../rootStore";
import { clearInterval } from 'worker-timers';

export const moveDown = (id: string) => root.update($root => {
  let taskList = $root.taskLists.find(task => task.id == $root.selectedId)!;  if (taskList.timer) clearInterval(taskList.timer)
  let taskIndex = taskList.tasks.findIndex((task) => task.id === id)
  arrayMoveDown(taskList.tasks, taskIndex)
  return $root
})

