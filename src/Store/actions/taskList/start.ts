import moment from "moment";
import { root } from "../../rootStore";
import { set_timer } from "./set_timer";

export const start = () => root.update($root => {
  let taskList = $root.taskLists[$root.selected]
  let currentTask = taskList.tasks[0]
  if (taskList.status == "TIMER_ACTIVE" && currentTask.status === "TICKING") return $root
  else {
    let start = moment([])
    currentTask.status = "TICKING"
    taskList.status = "TIMER_ACTIVE"
    currentTask.start_tick = start
    currentTask.computed = [start, start.clone().add(currentTask.remaining_seconds, "seconds")]
    
    //computing times for whole taskList
    let [_, rollingStart] = currentTask.computed
    taskList.tasks.forEach(task => {
      if (task.id === currentTask.id) return
      let computing: [moment.Moment, moment.Moment] = [rollingStart.clone(), rollingStart.clone().add(task.remaining_seconds, "seconds")]
      task.computed = computing
      rollingStart = computing[1].clone()
    })

    //set timer
    taskList.timer = set_timer()
    return $root
  }
})