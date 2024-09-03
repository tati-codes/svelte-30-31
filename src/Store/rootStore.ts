import { derived, get, writable, type Writable } from "svelte/store"
import type { TaskList } from "./Tasklist"
import type { Layout } from "./typeValidators/Layout"
import type { Views } from "./typeValidators/Views"
import { defaultTaskList } from "./Tasklist"
import { seconds_to_mmss } from "../lib/Shared/time"
import {storage, type PersistentWritable} from "../lib/Shared/storage"
import { requestWakeLock, turnLockOff } from "./actions/taskList/wakeLock"
export interface rootStore {
  muted: boolean
  layout: Layout
  currentView: Views
  taskLists: TaskList[]
  selectedId: string
  showClockIcon: boolean
  FX: boolean
  oldPlayback: false
  notificationsPermissions: boolean
  version: number
}

let tasklist = defaultTaskList();

let conditionalSetter = ($root: rootStore) => $root.taskLists.find(tl => tl.id === $root.selectedId)!.status !== "TIMER_ACTIVE" && !$root.taskLists.find(tl => tl.id === $root.selectedId)!.timer
let hydrationSanitizer = (newVal: rootStore) => {
  newVal.currentView = "TIMER"
  newVal.taskLists.map(list => list.status = "IDLE")
  newVal.taskLists.map(list => list.timer = null)
  return newVal;
}

export let root: PersistentWritable<rootStore> = storage("TaTimer", {
  muted: false,
  layout: "CLASSIC",
  currentView: "TIMER",
  taskLists: [tasklist],
  FX: true,
  selectedId: tasklist.id,
  showClockIcon: true,
  notificationsPermissions: window.Notification !== undefined && window.Notification.permission === "granted",
  oldPlayback: false,
  version: 0.2
}, 
conditionalSetter,
hydrationSanitizer)


export let currentTaskList = derived(root, ($root) => $root.taskLists.find(tl => tl.id === $root.selectedId)!)
export let currentTask = derived(currentTaskList, ($list) => $list.tasks[0])
export let tasklists = derived(root, ($root) => $root.taskLists)
export let onAddedTaskList = derived(tasklists, t => t.length)
export let onAddedTask = derived(currentTaskList, list => list.tasks.length)
export let notifsAllowed = derived(root, $root => $root.notificationsPermissions)
export let awakeLockHandler = derived(currentTaskList, ($current => {
  if ($current.status !== "TIMER_ACTIVE") {
    turnLockOff();
  } else {
    requestWakeLock()
  }
}))

// export let ariaStore = derived(root, $root => {
//   switch ($root.currentView) {
//     case "TIMER":
//     case "PICKER":
//     case "SETTINGS":
//   }
// })

onAddedTask.subscribe(root.persist)
onAddedTaskList.subscribe(root.persist)
currentTaskList.subscribe((taskList) => {
  if (taskList.status == "TIMER_ACTIVE") {
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
