import { remove_seconds } from "../../../lib/Shared/add_remove_seconds";
import { root } from "../../rootStore";

export let takeTime = (seconds: number) => root.update(($root) => {
  let {taskLists, selected} = $root
  let potential = remove_seconds(seconds)
  taskLists[selected].tasks[0].length = potential
  return $root
});
