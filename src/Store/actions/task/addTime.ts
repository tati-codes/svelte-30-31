import { add_seconds } from "../../../lib/Shared/add_remove_seconds";
import { root } from "../../rootStore";

export let addTime = (seconds: number) => root.update(($root) => {
  let {taskLists, selected} = $root
  let potential = add_seconds(seconds)
  let taskLength = taskLists[selected].tasks[0].length
  if (potential > taskLength) potential = taskLength
  taskLists[selected].tasks[0].length = potential
  return $root
});
