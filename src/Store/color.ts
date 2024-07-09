import { derived, writable, type Writable } from "svelte/store"
import { colorStrings } from "./colorStrings"
import type { Color, cssColor } from "../../types"
import { editingTask } from "./taskEdit"
import { currentTask } from "./rootStore"

// export const color: Writable<Color> = writable("gray");
export const color = derived(currentTask, ($task) => $task?.color || "gray")
export const colors = derived(color, ($color) => colorStrings[$color as Color])
export const light = derived(colors, ($colors) => $colors.light)
export const medium = derived(colors, ($colors) => $colors.medium)
export const dark = derived(colors, ($colors) => $colors.dark)

export const fromStr = (str: Color) => colorStrings[str]

export const stroke = (clr: string) => `stroke: ${clr}`
export const fill = (clr: string) => `fill: ${clr}`
export const colorp = (clr: string) => `color: ${clr}`
export const bg = (clr: string) => `background-color: ${clr}`
export const combineStyles = (st1: string, st2:string) => `${st1};${st2}`
