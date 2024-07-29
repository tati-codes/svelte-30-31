<script lang="ts"?>
  import {IconRegistry} from ".././TaskCard/taskCardIcons/IconRegistry";
  import TaskCard from '.././TaskCard/TaskCard.svelte'
  import AddTaskCard from ".././TaskCard/AddTaskCard.svelte"
  import LineIcon from "../../../lib/Icons/icons/LineIcon.svelte"
  import { currentTaskList } from "../../../Store/rootStore"
  import { isLooping } from "../../../Store/settingStore"
  $: tasks = $currentTaskList.tasks
</script>

<div class="card fadeIn">
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

<style>
  .card{
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-left: 17%;
  }
  :global(.card > .lineStroke) {
    margin: -10%
  
  }
</style>
