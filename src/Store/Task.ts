import moment from "moment"
import type { Color } from "../../types"
import { getUniqueID } from "../lib/Shared/getUniqueID"
import type { taskIcon } from "./typeValidators/taskIcon"
import { set_up_looping_generator } from "../lib/Shared/shuffling"

const taskStatusTypes = ["TICKING", "OVER", "INACTIVE"] as const
export type TaskStatus = typeof taskStatusTypes[number]

let get_icon = set_up_looping_generator([
  "keyboard",
  "mail",
  "stonks",
  "square_pencil",
  "phone",
  "hammerwrench",
  "palette",
  "camera",
  "music",
  "basket",
  "gas",
  "piggy",
  "utensils",
  "mug",
  "tv",
  "film",
  "book",
  "paperplane",
  "sleep",
] as taskIcon[])

let get_color = set_up_looping_generator([
  "gray",
  "orange",
  "red",
  "green",
  "blue",
  "forest",
  "yellow",
  "violet",
  "purple",
  "pink",
  "aqua",
] as Color[])

export class StopTask implements TaskI {
  color: Color = "gray"
  id = getUniqueID()
  status: TaskStatus = "OVER"
  name = "_BREAK"
  length = 0
  remaining_seconds = 0
  icon = null
  start_tick = null
  computed = null
}
export class Task implements TaskI {
  id: string = getUniqueID()
  name: string
  length: number
  remaining_seconds: number
  color: Color
  icon: taskIcon | null
  status: TaskStatus = "INACTIVE"
  start_tick: moment.Moment | null = null
  computed: [moment.Moment, moment.Moment] | null = null
  constructor(_name: string, _length: number, icon: taskIcon | null = null) {
    this.color = get_color()
    this.name = _name
    this.length = _length * 60
    this.remaining_seconds = _length * 60
    // this.remaining_seconds = _length //dev
    this.id
    this.icon = icon ? icon : get_icon()
  }
}
export interface TaskI {
  name: string
  status: TaskStatus
  id: string
  icon: taskIcon | null
  color: Color
  length: number
  remaining_seconds: number
  start_tick: moment.Moment | null
  computed: [moment.Moment, moment.Moment] | null
}