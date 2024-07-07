import { root } from "../../rootStore";

export const changeName = (newName: string) => root.update($root => {
  let taskList = $root.taskLists[$root.selected]
  taskList.name = newName.slice(0,12)
  return $root
})