import { root } from "../../rootStore";
import type { Layout } from "../../typeValidators/Layout";

export let toggleLoop = () => root.update($root => {
  let taskList = $root.taskLists.find(task => task.id == $root.selectedId)!;
  taskList.looping = !taskList.looping
  return $root
});
