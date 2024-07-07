<script lang="ts">
  import type { taskIcon } from "../../../../Store/typeValidators/taskIcon"
  //12px top 12%
  //18px left 4%
  //12px bottom
  //83px right 18%
  import {IconRegistry} from "./IconRegistry";
  export let width = 55, height= 55, x = 8, y = 5;
  export let type: taskIcon;
  export let _class = "icon";
  export let stroke = "white";
  let iconType = IconRegistry[type];
</script>

<svg
xmlns="http://www.w3.org/2000/svg"
{width}
{height}
{x}
{y}
viewBox="0 0 24 24"
fill="none"
{stroke}
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round"
class={_class}
>
<svelte:component this={iconType}></svelte:component>
</svg>

<style>
  .icon {
    grid-area: icon;
    margin-top: 12%;
    margin-left: 20%;
  }
  </style>
  
  <!-- className={`light-${color} ${className}`} -->
  <!-- onClick={onClick} -->
  <!--stroke={color}  -->