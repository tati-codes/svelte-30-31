import { writable, type Writable } from "svelte/store";

export let isFirstPlay: Writable<boolean> = writable(true)

export let firstPlayDone = () => isFirstPlay.update(current => false);