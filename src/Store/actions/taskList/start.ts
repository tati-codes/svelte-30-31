import type moment from "moment";
import { root } from "../../rootStore";
import { set_timer } from "./set_timer";

export const start = () => root.update($root => {
  let taskList = $root.taskLists[$root.selected]
  let currentTask = taskList.tasks[0]
  if (taskList.status == "TIMER_ACTIVE") return $root
  else {
    taskList.timer = set_timer()
    taskList.status = "TIMER_ACTIVE"
    //computing times for whole taskList
    let [_, start] = currentTask.computed!
    taskList.tasks.forEach(task => {
      if (task.id === currentTask.id) return
      let computing: [moment.Moment, moment.Moment] = [start.clone(), start.clone().add(task.remaining_seconds, "seconds")]
      task.computed = computing
      start = computing[1].clone()
    })
    return $root
  }
})