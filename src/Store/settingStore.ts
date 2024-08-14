import { derived } from "svelte/store";
import { currentTaskList, root } from "./rootStore";

export let isLooping = derived(currentTaskList, ($tasklist) => $tasklist.looping)
export let currentView = derived(root, ($root) => $root.currentView);
export let currentLayout = derived(root, ($root) => $root.layout);
export let isMuted = derived(root, ($root) => $root.muted)
export let FXOn = derived(root, $root => $root.FX)
export let clockOn = derived(root, $root => $root.showClockIcon)
export let oldPlayback = derived(root, $root => $root.oldPlayback)

export let persistettings = derived([isLooping,currentLayout,isMuted,FXOn,clockOn,oldPlayback], anything => anything)
persistettings.subscribe(root.persist)