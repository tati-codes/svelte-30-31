import { root } from "../../rootStore";

export let pause = () => root.update(($root) => {
  let {taskLists, selected} = $root
  let task = taskLists[selected].tasks[0]
  task.computed = null
  task.status = "OVER"
  return $root
});
