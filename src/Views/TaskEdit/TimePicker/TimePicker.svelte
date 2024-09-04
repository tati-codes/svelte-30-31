<script lang="ts">
  import { withAudio } from "../../../lib/Shared/withAudio"
  import { handleTimePickerChange } from "../../../Store/actions/taskEdit/handleTimePickerChange"
  import { bg, medium } from "../../../Store/color"
  import BackspaceBtn from "./BackspaceBtn.svelte"
  import CheckmarkBtn from "./CheckmarkBtn.svelte"
  import NumpadBtn from "./NumpadBtn.svelte"
  export let len:string;
  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, "checkmark", 0, "backspace"]
  export let handleChange = (num: number) => {
    let currentLen: string[] = len.replaceAll(":", "").split("")
    if (num > -1 && num <= 9) {
      currentLen.shift()
      currentLen.push(String(num))
    } else if (num === -1) {
      currentLen.pop()
      currentLen.unshift("0")
    }
    currentLen.splice(2, 0, ":")
    currentLen.splice(5, 0, ":")
    len = currentLen.join("")
    handleTimePickerChange(len);
  }
  export const onNumPress = (e: KeyboardEvent) => {
    console.log(e.key)
    let nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    if (nums.includes(e.key)) {
      withAudio(() => handleChange(Number(e.key)))
    } 
}
$: bsg = bg($medium);

</script>

<ul role="tabpanel" id="time=panel" aria-labelledby="numpad" style={bsg}  class="numpad fadeIn" on:keypress={onNumPress}>
  {#each labels as item}
    {#if typeof item == "number"}
      <NumpadBtn label={item} cb={() => handleChange(item)}/>
    {:else if item == "backspace"}
      <BackspaceBtn cb={() => handleChange(-1)}/>
    {:else if  item == "checkmark"}
      <CheckmarkBtn/>
    {/if}
  {/each}
</ul>

<style>
  .numpad {
  text-align: center;
  height: 400px;
  width: 480px;
  margin-left: 25px;
  padding-top:10px;
  display: grid;
  gap:5px;
  grid-template-columns: repeat(3, 1fr);
  /* border: 3px solid rgba(0, 0, 0, 0.2); */

}
</style>