import { arrayMoveDown, arrayMoveUp } from "../../../lib/Shared/arrayMove";
import { root } from "../../rootStore";

export const moveDown = (id: string) => root.update($root => {
  let taskList = $root.taskLists[$root.selected]
  let taskIndex = taskList.tasks.findIndex((task) => task.id === id)
  arrayMoveDown(taskList.tasks, taskIndex)
  return $root
})

