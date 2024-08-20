import { root } from "../../rootStore";
import { pause } from "../task/pause";
import { clearInterval } from 'worker-timers';

export const stop = () => root.update($root => {
  let taskList = $root.taskLists.find(task => task.id == $root.selectedId)!;  if (taskList.timer) clearInterval(taskList.timer)
    if (taskList.timer) clearInterval(taskList.timer)
  pause()
  taskList.timer = null
  taskList.status = "IDLE"
  taskList.tasks = taskList.tasks.map((task) => ({ ...task, computed: null }))
  return $root
})