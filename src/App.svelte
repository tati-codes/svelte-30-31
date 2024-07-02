<script lang="ts">
  import ColorStringChecker from "./Store/colorStringChecker.svelte"
  import Settings from "./Views/Settings/Settings.svelte"
  import TimerView from "./Views/Timer/TimerView.svelte"
  import List from "./Views/List/List.svelte"
  import {bg, light} from "./Store/color"
  import {currentTaskList, currentView, root} from "./Store/rootStore"
  import TaskEdit from "./Views/TaskEdit/TaskEdit.svelte"
  // "TIMER", "PICKER", "SETTINGS", "TASK_EDIT"
  // $: cssVarStyles = Object.entries(styles)
	// 	.map(([key, value]) => `--${key}:${value}`)
	// 	.join(';');
  import { setEditID } from "./Store/taskEdit"
  setEditID($currentTaskList.tasks[0].id);
</script>

<main class="bgt">
{#if $currentView == "TIMER"}
<List/>
{:else if $currentView == "PICKER"}
<TimerView/>
{:else if $currentView == "SETTINGS"}
<Settings/>
{:else if $currentView == "TASK_EDIT"}
<TaskEdit/>
{/if}
</main>

<style>
.bgt{
  transition: background-color 0.325s linear;
}
</style>