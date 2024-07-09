import { derived, get } from "svelte/store";
import { currentTaskList } from "./rootStore";

export let computedTimes = derived(currentTaskList, ($taskList) => {
  let currentTask = $taskList.tasks[0];
  let initial = $taskList.start_tick
  if (!initial) return null
  let rollingStart = initial.clone();
  return $taskList.tasks.map(task => {
    if (task.id === currentTask.id) return
    let computed: [moment.Moment, moment.Moment] = [rollingStart.clone(), rollingStart.clone().add(task.remaining_seconds, "seconds")]
    rollingStart = computed[1].clone()
    return {id: task.id, computed}
  })
})

export let getComputed = (id: string) => {
  let times = get(computedTimes);
  if (!times) return times
  else {
    return times.find(task => task!.id === id)
  }
}