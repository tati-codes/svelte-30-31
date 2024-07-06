import moment from "moment";
import { root } from "../../rootStore";

export let startTick = () => root.update(($root) => {
  let {taskLists, selected} = $root
  let current = taskLists[selected].tasks[0]
  let start = moment([])
  current.status = "TICKING"
  current.computed = [start,start.clone().add(current.remaining_seconds, "seconds")]
  return $root
});
