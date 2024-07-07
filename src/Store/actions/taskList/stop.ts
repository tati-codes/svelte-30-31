import { root } from "../../rootStore";
import { pause } from "../task/pause";

export const stop = () => root.update($root => {
  let taskList = $root.taskLists[$root.selected]
  if (taskList.timer) clearInterval(taskList.timer)
  pause()
  taskList.timer = null
  taskList.status = "IDLE"
  taskList.tasks = taskList.tasks.map((task) => ({ ...task, computed: null }))
  return $root
})