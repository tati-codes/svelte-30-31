import { root } from "../../rootStore";

export let pause = () => root.update(($root) => {
  let {taskLists, selected} = $root
  let taskList = taskLists[selected]
  let task = taskLists[selected].tasks[0]
  clearInterval(taskList.timer || -1)
  taskList.status = "PAUSED"
  return $root
});
