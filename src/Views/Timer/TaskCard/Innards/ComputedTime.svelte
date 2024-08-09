<script lang="ts">
  import moment from "moment"
  import { computedTimes } from "../../../../Store/computed";
  export let id: string;
  export let len: number
  $: task = $computedTimes.length ? $computedTimes.find(tsk => tsk?.id === id) : null
</script>

<div class="cTimes"> 
{#if task}
  {task.computed[0].format("HH:mm:ss")} -> {task.computed[1].format("HH:mm:ss")} 
{:else}
  {moment().startOf("day").format("HH:mm:ss")} -> { moment().startOf("day").add(len, "seconds").format("HH:mm:ss")} 
{/if}
</div>

<style>
  .cTimes {
    grid-area: 2 / 2 / 3 / 4; 
    font-size: 25px;
    text-align: right;
    margin-right: 23.5%;
    margin-top: -3%;
  }
</style>