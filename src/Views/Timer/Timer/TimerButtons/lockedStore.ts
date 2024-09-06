import { writable, type Writable } from "svelte/store"

export let  isLocked: Writable<Boolean> = writable(false)
export let toggleLocked = () => isLocked.update($isLocked => !$isLocked)