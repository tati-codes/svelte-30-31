<script>
  import DragHandle from "../../../../lib/Icons/icons/DragHandle.svelte"
  import { fromStr } from "../../../../Store/color"
  import { dragDisabled } from "../../dragStore"
  export let color;
	function startDrag(e) {
		// preventing default to prevent lag on touch devices (because of the browser checking for screen scrolling)
		e.preventDefault();
		$dragDisabled = false;
	}
	function handleKeyDown(e) {
		if ((e.key === "Enter" || e.key === " ") && dragDisabled) $dragDisabled = false;
	}
  //TODO [ ] modern layout
</script>

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
<DragHandle fill={fromStr(color).light}/>
</svg>

<style>
	.handle  {
		position: relative;
    top: 25%;
    right: -10%;
    grid-area: 1 / 3 / 3 / 4;
	}
</style>