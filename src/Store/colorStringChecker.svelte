<script lang="ts">
  import type { Color } from "../../types"
  import { colorStrings } from "../Store/colorStrings"
  import {color} from "./color"
  let select = (newColor: Color) => color.set(newColor);
  let keys = Object.keys(colorStrings);
  let selected: Color = $color;
</script>
  
<form on:submit|preventDefault={() => null}>
  <select bind:value={selected} on:change={() => {
    color.set(selected)}}>
    {#each keys as key}
      <option value={key}>
        {key}
      </option>
    {/each}
  </select>
</form>
  <p>
    {JSON.stringify(colorStrings[selected], null, 2)}
</p>