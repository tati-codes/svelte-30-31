import { writable, type Writable } from "svelte/store";

export let dragDisabled: Writable<boolean> = writable(true)