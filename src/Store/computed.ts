import { derived, get, writable, type Writable } from "svelte/store";
import { currentTaskList} from "./rootStore";
import moment from "moment";

interface ComputedTimeI {
  id: string
  computed: [moment.Moment, moment.Moment]
}
export let NEVER = moment("0", "year")
export let start_tick: Writable<moment.Moment> = writable(NEVER)


export let computedTimes = derived(start_tick, ($start_tick) => {
    let $taskList = get(currentTaskList)
    let initial = $start_tick
    let rollingStart = initial.clone();
    return $taskList.tasks.map((task, i) => {
      let computed: [moment.Moment, moment.Moment] = [rollingStart.clone(), rollingStart.clone().add(task.remaining_seconds, "seconds")]
      rollingStart = computed[1].clone()
      return {id: task.id, computed}
    })
  }
)