<script lang="ts">
  import ColorStringChecker from "./Store/colorStringChecker.svelte"
  import Settings from "./Views/Settings/Settings.svelte"
  import TimerView from "./Views/Timer/TimerView.svelte"
  import List from "./Views/List/List.svelte"
  import {currentTask, currentTaskList, currentView, root} from "./Store/rootStore"
  import TaskEdit from "./Views/TaskEdit/TaskEdit.svelte"
  import {bg, light} from "./Store/color"
  $: bsg = bg($light)
  // "TIMER", "PICKER", "SETTINGS", "TASK_EDIT"
  // $: cssVarStyles = Object.entries(styles)
	// 	.map(([key, value]) => `--${key}:${value}`)
	// 	.join(';');
  import DebugStore from "./lib/Shared/debugStore.svelte"
</script>

<div class="container" style={bsg} >

  <main class="bgt">
    {#if $currentView == "TIMER"}
    <TimerView/>
    {:else if $currentView == "PICKER"}
    <List/>
    {:else if $currentView == "SETTINGS"}
    <Settings/>
    {:else if $currentView == "TASK_EDIT"}
    <TaskEdit/>
    {/if}
  </main>
  <div class="asidecontainer">

    <aside class="first">
      <DebugStore obj={$root} title="root"/>
      <DebugStore obj={$currentTaskList} title="tasklist"/>
    </aside>
    <aside class="second">
      {#each $currentTaskList.tasks as task}
      <DebugStore obj={task} title="tasks"/>
      {/each}
    </aside>
  </div>
</div>
<style>
  .asidecontainer {
    display: inline-flex;
height:fit-content;
flex-shrink: 1;
  }
  .first {
    background: rgba(0, 0, 0, 0.8);
    height:fit-content;
    padding: 20px;
    z-index: 0;
    font-family: Helvetica;
    border-right: 3px dashed whitesmoke;
  }
  .second {
    background: rgba(0, 0, 0, 0.8);
    padding: 20px;
    z-index: 0;
    font-family: Helvetica;
  }

.bgt{
  transition: background-color 0.325s linear;
}
.container {
  display: grid; 
  grid-template-columns: 5fr 5fr; 
  gap: 0px 0px; 
}
</style>