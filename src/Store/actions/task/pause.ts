import { NEVER, start_tick } from "../../computed";
import { root } from "../../rootStore";
import { clearInterval } from 'worker-timers';
export let pause = () => root.update(($root) => {
  let taskList = $root.taskLists.find(task => task.id == $root.selectedId)!;
  start_tick.set(NEVER)
  clearInterval(taskList.timer || -1)
  taskList.timer = null
  taskList.status = "PAUSED"
  return $root
}, true);
