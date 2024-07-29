import { add_seconds } from "../../../lib/Shared/add_remove_seconds";
import { root } from "../../rootStore";

export let addTime = () => root.update(($root) => {
  let taskList = $root.taskLists.find(task => task.id == $root.selectedId)!;
  let task = taskList.tasks[0]
  let potential = add_seconds(task.remaining_seconds)
  let taskLength = task.length
  if (potential > taskLength) potential = taskLength
  task.remaining_seconds = potential
  return $root
});
