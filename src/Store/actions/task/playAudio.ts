import { get } from "svelte/store"
import { isMuted } from "../../settingStore"

const taskSound = new Audio("https://tatiana.moe/assets/task_done.mp3")
const listSound = new Audio("https://tatiana.moe/assets/clear.mp3")


export const playTaskDoneSound = () => {
  if (get(isMuted)) return
  else taskSound.play()
}

export const playClearSound = () => {
  if (get(isMuted)) return
  else listSound.play()
}