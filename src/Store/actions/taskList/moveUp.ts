import { arrayMoveUp } from "../../../lib/Shared/arrayMove";
import { root } from "../../rootStore";
import { sendToBottom } from "./sendBottom";

export const moveUp = (id: string) => root.update($root => {
  let taskList = $root.taskLists[$root.selected]
  let index = taskList.tasks.findIndex((task) => task.id === id)
  if (index === 0) sendToBottom() //FIXME with preserve
  else arrayMoveUp(taskList.tasks, index)
  return $root
})