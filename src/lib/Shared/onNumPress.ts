import { get } from "svelte/store";
import { handleTimePickerChange } from "../../Store/actions/taskEdit/handleTimePickerChange";
import { editView } from "../../Store/taskEdit";
//duplicated from timepicker
export let handleChange = (num: number, oldLen: string) => {
  let currentLen: string[] = oldLen.replaceAll(":", "").split("")
  if (num > -1 && num <= 9) {
    currentLen.shift()
    currentLen.push(String(num))
  } else if (num === -1) {
    currentLen.pop()
    currentLen.unshift("0")
  }
  currentLen.splice(2, 0, ":")
  currentLen.splice(5, 0, ":")
  let result = currentLen.join("")
  handleTimePickerChange(result);
  return result
}

export const onNumPress = (e: KeyboardEvent, oldLen:string) => {
    let view = get(editView);
    if (view !== "NUMPAD") return oldLen;
    let nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    //@ts-ignore
    if (nums.includes(e.key) && e.target?.nodeName != "INPUT") {
      return handleChange(Number(e.key), oldLen)
    } else return oldLen
}

