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
  currentView: "TIMER",
  taskLists: [tasklist],
  selected: 0
})

// export const Meta_reducer = (
//   state: MetaStore,
//   type: string,
//   payload?: Layout | Views | string
// ): Partial<MetaStore> => {
//   switch (type) {
//     case actions.meta.playTaskDone: {
//       if (!state.muted) playTaskDoneSound()
//       return state
//     }
//     case actions.meta.playClear: {
//       if (!state.muted) playClearSound()
//       return state
//     }
//     case actions.meta.toggleMute: {
//       return {
//         muted: !state.muted,
//       }
//     }
//     case actions.meta.setLayout: {
//       if (!isLayout(payload)) return state
//       return {
//         layout: payload,
//       }
//     }
//     case actions.meta.setEditTask: {
//       if (payload !== null && typeof payload !== "string") return state
//       else if (payload === null) return {editingTaskID: null}
//       return {
//         currentView: "TASK_EDIT",
//         editingTaskID: payload,
//       }
//     }
//     case actions.meta.setView: {
//       if (!isView(payload)) return state
//       if (payload === "PICKER") {
//         PickerStor.getState().dispatch("editTaskList", {
//           id: TimerStore.getState().id,
//           changes: {
//             ...TimerStore.getState()
//           }
//         })
//       }
//       if (payload === state.currentView) return {currentView: "TIMER"}
//       return {
//         currentView: payload,
//       }
//     }
//     default:
//       return state
//   }
// }
