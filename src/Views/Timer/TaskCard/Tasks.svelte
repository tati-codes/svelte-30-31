<script >
  import TaskCard from '.././TaskCard/TaskCard.svelte'
  import AddTaskCard from ".././TaskCard/AddTaskCard.svelte"
  import LineIcon from "../../../lib/Icons/icons/LineIcon.svelte"
  import { currentTaskList } from "../../../Store/rootStore"
  import { isLooping } from "../../../Store/settingStore"
  import { dndzone, SOURCES, TRIGGERS	 } from 'svelte-dnd-action';
	import { flip } from 'svelte/animate';
  import { reorder } from "../../../Store/actions/taskList/reorder"
  import { dragDisabled } from "./dragStore"
  import Dragger from "./Innards/Dragger.svelte"
  import { playClick } from '../../../Store/actions/task/playAudio'

	const flipDurationMs = 200;

  function handleConsider(e) {
		const {items: newItems, info: {source, trigger}} = e.detail;
    reorder(newItems, false)
    playClick()
    // Ensure dragging is stopped on drag finish via keyboard
		if (source === SOURCES.KEYBOARD && trigger === TRIGGERS.DRAG_STOPPED) {
			$dragDisabled = true;
		}
	}
	function handleFinalize(e) {
		const {items: newItems, info: {source}} = e.detail;
    reorder(newItems, true)
    playClick()
		// Ensure dragging is stopped on drag finish via pointer (mouse, touch)
		if (source === SOURCES.POINTER) {
			$dragDisabled = true;
		}
	}
  $: tasks = $currentTaskList.tasks
</script>

<div class="card fadeIn"
use:dndzone="{{ items: $currentTaskList.tasks, dragDisabled: $dragDisabled, flipDurationMs, zoneItemTabIndex: -1, zoneTabIndex: -1, dropTargetStyle: {}}}"
on:consider="{handleConsider}"
on:finalize="{handleFinalize}"
>
{#each tasks as task, i (task.id)}
  <div class="taskcardContainer" animate:flip={{duration: 300}} >
    {#if task.name === "_BREAK"}
    {#if !$isLooping}
    <LineIcon/>
    {/if}
    {:else}
    <TaskCard {task} index={(i+11)*2} >
      <Dragger color={task.color} index={((i+11)*2)+1}/>
    </TaskCard>
    {/if}
  </div>
  {/each}
</div>
<div class="card fadeIn">
  <AddTaskCard/>
</div>

<style>
  .taskcardContainer {
    height: fit-content;
    width:  fit-content;
  }
  .card{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:30px;
    margin-bottom: 30px;
  }
  :global(.taskcardContainer > .lineStroke) {
    /* margin: -10%; */
  }
</style>
