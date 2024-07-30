import { derived, writable, type Writable } from "svelte/store"
import type { TaskList } from "./Tasklist"
import type { Layout } from "./typeValidators/Layout"
import type { Views } from "./typeValidators/Views"
import { defaultTaskList } from "./Tasklist"
import { seconds_to_mmss } from "../lib/Shared/time"
export interface rootStore {
  muted: boolean
  layout: Layout
  currentView: Views
  taskLists: TaskList[]
  selectedId: string
  showClockIcon: boolean
  FX: boolean
  oldPlayback: false
}

let tasklist = defaultTaskList();

export let root: Writable<rootStore> = writable({
  muted: false,
  layout: "CLASSIC",
  currentView: "TIMER",
  taskLists: [tasklist],
  FX: true,
  selectedId: tasklist.id,
  showClockIcon: false,
  oldPlayback: false
})

export let currentTaskList = derived(root, ($root) => $root.taskLists.find(tl => tl.id === $root.selectedId)!)
export let currentTask = derived(currentTaskList, ($list) => $list.tasks[0])
export let tasklists = derived(root, ($root) => $root.taskLists)

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
