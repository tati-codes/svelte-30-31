import { seconds_to_mmss } from "../../../lib/Shared/time"
import { currentTaskList } from "../../rootStore"

currentTaskList.subscribe((taskList) => {
  if (taskList.isPlaying) {
    document.title = "TaTimer - " + seconds_to_mmss(taskList.tasks[0].remaining_seconds)
  } else if (taskList.status == "PAUSED") {
    document.title = "TaTimer - Paused"
  } else if (taskList.status == "DONE" || taskList.status == "IDLE") {
    document.title = "TaTimer"
  }
  return () => {
    document.title = "TaTimer"
  }
})