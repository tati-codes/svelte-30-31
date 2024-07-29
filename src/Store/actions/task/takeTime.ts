import { remove_seconds } from "../../../lib/Shared/add_remove_seconds";
import { root } from "../../rootStore";

export let takeTime = () => root.update(($root) => {
  let taskList = $root.taskLists.find(task => task.id == $root.selectedId)!;
  let task = taskList.tasks[0]
  let potential = remove_seconds(task.remaining_seconds)
  task.remaining_seconds = potential
  return $root
});
