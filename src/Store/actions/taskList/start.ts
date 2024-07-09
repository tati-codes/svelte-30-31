import moment from "moment";
import { root } from "../../rootStore";
import { set_timer } from "./set_timer";

export const start = () => root.update($root => {
  let taskList = $root.taskLists[$root.selected]
  if (taskList.status == "TIMER_ACTIVE" && taskList.timer) return $root
  else {
    let start = moment([])
    taskList.status = "TIMER_ACTIVE"
    taskList.start_tick = start
    taskList.timer = set_timer()
    return $root
  }
})