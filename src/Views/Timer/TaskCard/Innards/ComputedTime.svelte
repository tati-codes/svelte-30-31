<script lang="ts">
  import type { Task } from "../../../../Store/Task"

  export let computed: Task["computed"];
  let [cStart, cEnd] = computed ? [computed[0].format("HH:mm:ss"), computed[1].format("HH:mm:ss")] : ["00:00:00", "00:00:00"]
</script>

<div class="cTimes"> {cStart} -> {cEnd} </div>

<style>
  .cTimes {
    grid-area: cTimes;
    font-size: 25px;
    text-align: right;
    margin-right: 23.5%;
    margin-top: -3%;
  }
</style>