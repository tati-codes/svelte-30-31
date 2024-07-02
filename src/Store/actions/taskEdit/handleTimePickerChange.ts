import { get } from "svelte/store"
import { editingTask } from "../../taskEdit"
import { seconds_to_hhmmss } from "../../../lib/Shared/time"
import { editLength } from "./editLength"

export let handleTimePickerChange = (changedLen: string) => {
  let currentLen: string[] = changedLen.replaceAll(":", "").split("")
  let hours = Number(currentLen.slice(0, 2).join("")) * 3600
  let minutes = Number(currentLen.slice(2, 4).join("")) * 60
  let seconds = Number(currentLen.slice(4, 6).join(""))
  let total = hours + minutes + seconds
  if (total < 60) seconds = 60
  else if (total >= 86400) total = 86399 //1 day
  editLength(total,total)
  console.log(get(editingTask))
}