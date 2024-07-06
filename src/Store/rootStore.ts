import { derived, writable, type Writable } from "svelte/store"
import type { TaskList } from "./Tasklist"
import type { Layout } from "./typeValidators/Layout"
import type { Views } from "./typeValidators/Views"
import { defaultTaskList } from "./Tasklist"
export interface rootStore {
  muted: boolean
  layout: Layout
  currentView: Views
  taskLists: TaskList[]
  selected: number
}

let tasklist = defaultTaskList();

export let root: Writable<rootStore> = writable({
  muted: false,
  layout: "CLASSIC",
  currentView: "TASK_EDIT",
  taskLists: [tasklist],
  selected: 0
})

export let currentView = derived(root, ($root) => $root.currentView);
export let currentTaskList = derived(root, ($root) => $root.taskLists[$root.selected])
export let currentTask = derived(root, ($root) => $root.taskLists[$root.selected].tasks[0])