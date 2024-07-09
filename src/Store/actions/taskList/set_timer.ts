import { get } from "svelte/store"
import { currentTask } from "../../rootStore"
import { tick } from "../task/tick"
import { sendToBottom } from "./sendBottom"

export let set_timer = () => setInterval(() => {
    let {remaining_seconds} = get(currentTask)
    if (remaining_seconds > 0) tick()
    else if (remaining_seconds < 0) console.error("timer error")
    else if (remaining_seconds <= 0) sendToBottom()
  }, 1000)