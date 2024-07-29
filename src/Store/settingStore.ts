import { derived } from "svelte/store";
import { currentTaskList, root } from "./rootStore";

export let isLooping = derived(currentTaskList, ($tasklist) => $tasklist.looping)
export let currentView = derived(root, ($root) => $root.currentView);
export let currentLayout = derived(root, ($root) => $root.layout);
export let isMuted = derived(root, ($root) => $root.muted)