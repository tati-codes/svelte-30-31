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
  selectedId: string
}

let tasklist = defaultTaskList();

export let root: Writable<rootStore> = writable({
  muted: false,
  layout: "CLASSIC",
  currentView: "TIMER",
  taskLists: [tasklist],
  selectedId: tasklist.id
})

export let currentTaskList = derived(root, ($root) => $root.taskLists.find(tl => tl.id === $root.selectedId)!)
export let currentTask = derived(currentTaskList, ($list) => $list.tasks[0])
export let tasklists = derived(root, ($root) => $root.taskLists)