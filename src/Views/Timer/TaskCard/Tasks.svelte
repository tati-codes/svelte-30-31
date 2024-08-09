<script >
  import {IconRegistry} from ".././TaskCard/taskCardIcons/IconRegistry";
  import TaskCard from '.././TaskCard/TaskCard.svelte'
  import AddTaskCard from ".././TaskCard/AddTaskCard.svelte"
  import LineIcon from "../../../lib/Icons/icons/LineIcon.svelte"
  import { currentTaskList } from "../../../Store/rootStore"
  import { isLooping } from "../../../Store/settingStore"
  import { dndzone, SOURCES, TRIGGERS	 } from 'svelte-dnd-action';
	import { flip } from 'svelte/animate';
  import { reorder } from "../../../Store/actions/taskList/reorder"
  import Icon from "../../../lib/Icons/Icon.svelte"
  import DragHandle from "../../../lib/Icons/icons/DragHandle.svelte"
  import { fromStr, fill } from "../../../Store/color"

	const flipDurationMs = 200;
	let dragDisabled = true;
	
	function handleConsider(e) {
		const {items: newItems, info: {source, trigger}} = e.detail;
    reorder(newItems)
    // Ensure dragging is stopped on drag finish via keyboard
		if (source === SOURCES.KEYBOARD && trigger === TRIGGERS.DRAG_STOPPED) {
			dragDisabled = true;
		}
	}
	function handleFinalize(e) {

		const {items: newItems, info: {source}} = e.detail;
    reorder(newItems)
		// Ensure dragging is stopped on drag finish via pointer (mouse, touch)
		if (source === SOURCES.POINTER) {
			dragDisabled = true;
		}
	}
	function startDrag(e) {
		// preventing default to prevent lag on touch devices (because of the browser checking for screen scrolling)
		e.preventDefault();
		dragDisabled = false;
	}
	function handleKeyDown(e) {
		if ((e.key === "Enter" || e.key === " ") && dragDisabled) dragDisabled = false;
	}


  $: tasks = $currentTaskList.tasks
</script>

<div class="card fadeIn"
use:dndzone="{{ items: $currentTaskList.tasks, dragDisabled, flipDurationMs, zoneItemTabIndex: -1 }}"
on:consider="{handleConsider}"
on:finalize="{handleFinalize}"
>
  {#each tasks as task (task.id)}
  <div class="taskcardContainer" animate:flip={{duration: 200}}>
    {#if task.name === "_BREAK"}
    {#if !$isLooping}
    <LineIcon/>
    {/if}
    {:else}

    <TaskCard {task}>
      <svg tabindex={dragDisabled? 0 : -1} 
      aria-label="drag-handle"
      viewBox="0 0 25 25" 
      width="55"
      height="55"
      fill="none"
      class="handle" 
      style={dragDisabled ? 'cursor: grab' : 'cursor: grabbing'}
      on:mousedown={startDrag} 
      on:touchstart={startDrag}
      on:keydown={handleKeyDown}
      >
      <DragHandle fill={fromStr(task.color).light}/>
     </svg>
    </TaskCard>
    {/if}
  </div>
  {/each}
</div>
<!-- <AddTaskCard/> -->

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
  }
  :global(.taskcardContainer > .lineStroke) {
    /* margin: -10%; */
  }
  :global(svg.handle ) {
		position: relative;
    top: 25%;
    right: -40%;
    grid-area: 1 / 3 / 3 / 4; 
}
</style>
