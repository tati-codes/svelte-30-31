<script lang="ts">
  import ColorStringChecker from "./Store/colorStringChecker.svelte"
  import Settings from "./Views/Settings/Settings.svelte"
  import TimerView from "./Views/Timer/TimerView.svelte"
  import List from "./Views/List/List.svelte"
  import {currentTask, currentTaskList, root} from "./Store/rootStore"
  import TaskEdit from "./Views/TaskEdit/TaskEdit.svelte"
  import {bg, light, medium} from "./Store/color"
  $: bsg = bg($light)
  // "TIMER", "PICKER", "SETTINGS", "TASK_EDIT"
  // $: cssVarStyles = Object.entries(styles)
	// 	.map(([key, value]) => `--${key}:${value}`)
	// 	.join(';');
  import DebugStore from "./lib/Shared/debugStore.svelte"
  import TopBar from "./Views/Timer/TopBar/TopBar.svelte"
  import Debug from "./lib/Debug.svelte"
  import { currentView } from "./Store/settingStore"
  let checked = false;
  //@ts-ignore
  // $: window.document.getElementById("app").style = bg($light)
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
    <input class="float" type="checkbox" bind:checked={checked}/>
    {#if checked}
      <Debug/>  
    {/if}
  </div>
</div>
<style>
  main{
    max-width: 650px;
    background-size: 100%; 
    }
  .float {
    float: left;
    margin-left: 5%;
    z-index: 2;
    position:absolute;
  }
  .asidecontainer {
    display: inline-flex;
    height:fit-content; 
    flex-shrink: 1;
  }

.bgt{
  transition: background-color 0.325s linear;
}
.container {
  display: grid; 
  grid-template-columns: 5fr 5fr; 
  gap: 0px 0px; 
  padding-bottom: 1%;
}
</style>