import { NEVER, start_tick } from "../../computed";
import { root } from "../../rootStore";

export let pause = () => root.update(($root) => {
  let {taskLists, selected} = $root
  let taskList = taskLists[selected]
  start_tick.set(NEVER)
  clearInterval(taskList.timer || -1)
  taskList.timer = null
  taskList.status = "PAUSED"
  return $root
});
