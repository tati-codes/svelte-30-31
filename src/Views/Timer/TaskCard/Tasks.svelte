<script lang="ts"?>
  import {IconRegistry} from ".././TaskCard/taskCardIcons/IconRegistry";
  import TaskCard from '.././TaskCard/TaskCard.svelte'
  import AddTaskCard from ".././TaskCard/AddTaskCard.svelte"
  import LineIcon from "../../../lib/Icons/icons/LineIcon.svelte"
  import { currentTaskList, isLooping } from "../../../Store/rootStore"
  $: tasks = $currentTaskList.tasks
</script>

<div class="card">
  {#each tasks as task}
  {#if task.name === "_BREAK"}
    {#if !isLooping}
      <LineIcon/>
    {/if}
  {:else}
    <TaskCard {task}/>
  {/if}
  {/each}
  <AddTaskCard/>
</div>
  