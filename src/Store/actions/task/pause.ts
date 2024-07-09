import { root } from "../../rootStore";

export let pause = () => root.update(($root) => {
  let {taskLists, selected} = $root
  let taskList = taskLists[selected]
  let task = taskLists[selected].tasks[0]
  task.computed = null
  clearInterval(taskList.timer || -1)
  task.status = "INACTIVE"
  taskList.status = "IDLE"
  return $root
});
