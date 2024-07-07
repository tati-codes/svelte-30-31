import { root } from "../../rootStore";

export const end = () => root.update($root => {
  let taskList = $root.taskLists[$root.selected]
  if (taskList.timer) clearInterval(taskList.timer)
  taskList.timer = null
  taskList.status = "IDLE"
  taskList.tasks = taskList.tasks.map((task) => ({ ...task, computed: null }))
  return $root
})