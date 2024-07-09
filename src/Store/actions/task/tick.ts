import { root } from "../../rootStore";

export let tick = () => root.update(($root) => {
  let {taskLists, selected} = $root
  let current = taskLists[selected].tasks[0]
  current.remaining_seconds = current.remaining_seconds - 1
  // if (current.remaining_seconds - 2 <= 0) current.status = "OVER"
  return $root
});
