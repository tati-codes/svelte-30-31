import { root } from "../../rootStore";

export let tick = () => root.update(($root) => {
  let taskList = $root.taskLists.find(task => task.id == $root.selectedId)!;
  let task = taskList.tasks[0]
  task.remaining_seconds = task.remaining_seconds - 1
  // if (current.remaining_seconds - 2 <= 0) current.status = "OVER"
  return $root
});
