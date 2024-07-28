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
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
