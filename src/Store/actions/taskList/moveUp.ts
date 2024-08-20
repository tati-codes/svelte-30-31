import { arrayMoveUp } from "../../../lib/Shared/arrayMove";
import { root } from "../../rootStore";
import { sendToBottom } from "./sendBottom";
import { clearInterval } from 'worker-timers';

export const moveUp = (id: string) => root.update($root => {
  let taskList = $root.taskLists.find(task => task.id == $root.selectedId)!;  if (taskList.timer) clearInterval(taskList.timer)

  let index = taskList.tasks.findIndex((task) => task.id === id)
  if (index === 0) sendToBottom(id) 
  else arrayMoveUp(taskList.tasks, index)
  return $root
})