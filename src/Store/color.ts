import { derived, writable, type Writable } from "svelte/store"
import { colorStrings } from "./colorStrings"
import type { Color, cssColor } from "../../types"

export const color: Writable<Color> = writable("gray");
export const colors = derived(color, ($color) => colorStrings[$color])
export const light = derived(colors, ($colors) => $colors.light)
export const medium = derived(colors, ($colors) => $colors.medium)
export const dark = derived(colors, ($colors) => $colors.dark)

export const stroke = (clr: string) => `stroke: ${clr}`
export const fill = (clr: string) => `fill: ${clr}`
export const colorp = (clr: string) => `color: ${clr}`
export const bg = (clr: string) => `background-color: ${clr}`