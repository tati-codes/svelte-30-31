import { add_seconds } from "../../../lib/Shared/add_remove_seconds";
import { root } from "../../rootStore";

// case actions.task.addTime: {
//   let potential = add_remove_seconds(state.remaining_seconds, true)
//   if (potential > state.length) {
//     potential = state.length
//   }
//   return {
//     ...state,
//     remaining_seconds: potential,
//   }
// }

export let addTime = (seconds: number) => root.update(($root) => {
  let {taskLists, selected} = $root
  let potential = add_seconds(seconds)
  let taskLength = taskLists[selected].tasks[0].length
  if (potential > taskLength) potential = taskLength
  taskLists[selected].tasks[0].length = potential
  return $root
});
