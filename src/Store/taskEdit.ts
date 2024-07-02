import { derived, writable, type Writable } from "svelte/store"
import { root, currentTaskList } from "./rootStore"
import type { editViews } from "./typeValidators/editView"
interface editingStore {
  id: string | null
  editView: editViews
}

export let editStore: Writable<editingStore> = writable({
  id: null,
  editView: "ICON"
})

export let editingTask = derived([editStore, currentTaskList], (values) => {
  let [eStore, eList] = values;
  return eList.tasks.find(task => task.id == eStore.id) || null
})

export let editView = derived(editStore, ($eStore) => $eStore.editView)

export let swapEditView = (newView: editViews) => editStore.update($old => {
  $old.editView = newView
  return $old
});

export let setEditID = (newId: editingStore["id"]) => editStore.update($old => {
  $old.id = newId
  return $old
});
