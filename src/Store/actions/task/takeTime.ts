import { remove_seconds } from "../../../lib/Shared/add_remove_seconds";
import { root } from "../../rootStore";

export let takeTime = () => root.update(($root) => {
  let {taskLists, selected} = $root
  let task = taskLists[selected].tasks[0]
  let potential = remove_seconds(task.remaining_seconds)
  taskLists[selected].tasks[0].remaining_seconds = potential
  return $root
});
