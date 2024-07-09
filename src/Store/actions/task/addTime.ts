import { add_seconds } from "../../../lib/Shared/add_remove_seconds";
import { root } from "../../rootStore";

export let addTime = () => root.update(($root) => {
  let {taskLists, selected} = $root
  let task = taskLists[selected].tasks[0]
  let potential = add_seconds(task.remaining_seconds)
  let taskLength = taskLists[selected].tasks[0].length
  if (potential > taskLength) potential = taskLength
  taskLists[selected].tasks[0].remaining_seconds = potential
  return $root
});
