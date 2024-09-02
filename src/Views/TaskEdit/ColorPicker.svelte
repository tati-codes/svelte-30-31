<script lang="ts">
  import type { Color, cssColor } from "../../../types"
  import { bg, medium, dark, color } from "../../Store/color"
  import { colorStrings } from "../../Store/colorStrings"
  import { editingTask } from "../../Store/taskEdit"
  import { editColor } from "../../Store/actions/taskEdit/editColor"
  import { onEnter } from "../../lib/Shared/onEnter"
  $: bsg = bg($medium);
  $: currentColor = $editingTask?.color;
  let colors: Color[] = Object.keys(colorStrings) as Color[]
</script>
<!-- <-on:keyup={() => null} -->
<ul id="color-panel" aria-labelledby="colors" role="tabpanel" style={bsg} class="colorPicker">
  {#each colors as color, i}
  <li
  role="button"
  aria-label={`select ${color}`}
  aria-selected={color === currentColor}
  id={`color-${color}`}
      on:keyup={onEnter(() => editColor(color))}
      on:click={() => editColor(color)}
      tabIndex={i+20}
      style={bg(colorStrings[color].dark)}
      class={`colorSquare background-darken  ${
        color === currentColor ? "selected" : ""
      } fadeIn`}
    ></li>
  {/each}
</ul>

<style>
  .colorSquare {
  margin: 25px 0 25px 25px;
  height: 65px;
  width: 65px;
  display: grid;
  border-radius: 15px;
  transition: all 0.325s linear;
  }

  .colorPicker {
  z-index: 1;
  height: 400px;
  width: 480px;
  margin-left: 25px;
  display: grid;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  grid-template-columns: repeat(4, 3fr);
  gap: 10px;
}
.selected {
  box-shadow: -4px 4px rgba(0,0,0,0.8);
}
</style>