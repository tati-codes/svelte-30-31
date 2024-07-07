<script lang="ts">
  import ColorStringChecker from "./Store/colorStringChecker.svelte"
  import Settings from "./Views/Settings/Settings.svelte"
  import TimerView from "./Views/Timer/TimerView.svelte"
  import List from "./Views/List/List.svelte"
  import {bg, light} from "./Store/color"
  import {currentTask, currentTaskList, currentView, root} from "./Store/rootStore"
  import TaskEdit from "./Views/TaskEdit/TaskEdit.svelte"
  
  // "TIMER", "PICKER", "SETTINGS", "TASK_EDIT"
  // $: cssVarStyles = Object.entries(styles)
	// 	.map(([key, value]) => `--${key}:${value}`)
	// 	.join(';');
  import { setEditID } from "./Store/taskEdit"
  import DebugStore from "./lib/Shared/debugStore.svelte"
  setEditID($currentTaskList.tasks[0].id);
</script>

<div class="container">

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
    <aside>
      <DebugStore obj={$root} title="root"/>
      <DebugStore obj={$currentTaskList} title="tasklist"/>
      <DebugStore obj={$currentTask} title="task"/>
    </aside>
</div>
<style>

  aside {
    background: rgba(0, 0, 0, 0.8);
    margin: 20px;
    padding: 20px;
    z-index: 0;
    position: absolute;
    margin-left: 50%;
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