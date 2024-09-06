import { get } from "svelte/store"
import { isMuted } from "../../settingStore"
import { allowClicks, root } from "../../rootStore"

const taskSound = new Audio("https://tati.codes/assets/task_done.mp3")
const listSound = new Audio("https://tati.codes/assets/clear.mp3")
const clicks: HTMLAudioElement[] = []
for (let index = 0; index < 19; index++) {
  clicks.push(new Audio(`https://tati.codes/assets/clicks/click${index+1}.mp3`))
}

export const playTaskDoneSound = () => {
  if (get(isMuted)) return
  else taskSound.play()
}

export const playClearSound = () => {
  if (get(isMuted)) return
  else listSound.play()
}

export const playClick = () => {
  if (get(isMuted) || !get(allowClicks)) return
  else {
    clicks[clicks.length * Math.random() | 0].play()
  }
}
export const toggleClicks = () => root.update($root => {
  $root.allowClicks = !$root.allowClicks
  return $root
})