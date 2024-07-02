<script lang="ts">
  import { seconds_to_hhmmss } from "../../../lib/Shared/time"
  import { editingTask } from "../../../Store/taskEdit"
  import BackspaceBtn from "./BackspaceBtn.svelte"
  import CheckmarkBtn from "./CheckmarkBtn.svelte"
  import NumpadBtn from "./NumpadBtn.svelte"
  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, "checkmark", 0, "backspace"]
  $: len = seconds_to_hhmmss($editingTask!.length)

  let handleChange = (num: number) => {
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
    //i don't even know
    let currentLen2: string[] = currentLen.join("").replaceAll(":", "").split("")
    let hours = Number(currentLen2.slice(0, 2).join("")) * 3600
    let minutes = Number(currentLen2.slice(2, 4).join("")) * 60
    let seconds = Number(currentLen2.slice(4, 6).join(""))
    let total = hours + minutes + seconds
    if (total < 60) seconds = 60
    else if (total >= 86400) total = 86399 //1 day
    // sendChange({ length: total, remaining_seconds: total })
  }
</script>

<ul class="numpad fadeIn">
  {#each labels as item}
    {#if typeof item == "number"}
      <NumpadBtn label={item.toString()} cb={() => handleChange(item)}/>
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
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>