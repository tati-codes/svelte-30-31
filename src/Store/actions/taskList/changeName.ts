import { root } from "../../rootStore";

export const changeName = (newName: string) => root.update($root => {
  let taskList = $root.taskLists.find(task => task.id == $root.selectedId)!;
  taskList.name = newName.slice(0,18)
  return $root
}, true)