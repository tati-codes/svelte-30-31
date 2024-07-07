import { get } from "svelte/store"
import { taskStatus } from "../../rootStore"
import { tick } from "../task/tick"
import { sendToBottom } from "./sendBottom"

export let set_timer = () => setInterval(() => {
    let status = get(taskStatus)
    if (status == "TICKING") tick()
    else if (status == "OVER") sendToBottom()
  }, 1000)