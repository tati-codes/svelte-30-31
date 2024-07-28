import moment from "moment";
import { root } from "../../rootStore";
import { set_timer } from "./set_timer";
import { start_tick } from "../../computed";

export const start = () => root.update($root => {
  let taskList = $root.taskLists.find(task => task.id == $root.selectedId)!;  if (taskList.timer) clearInterval(taskList.timer)
    if (taskList.status == "TIMER_ACTIVE" && taskList.timer) return $root
  else {
    let start = moment([])
    taskList.status = "TIMER_ACTIVE"
    start_tick.set(start)
    taskList.timer = set_timer()
    return $root
  }
})