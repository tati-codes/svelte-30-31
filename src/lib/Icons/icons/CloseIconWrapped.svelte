<script lang="ts">
  import { light } from "../../../Store/color"
  import CloseIcon from "../../../Views/Timer/TaskCard/taskCardIcons/CloseIcon.svelte"
  import Icon from "../Icon.svelte"
  export let width = 55;
  export let height = 55;
  export let x = 8;
  export let y = 5;
</script>

  <Icon x={x} y={y} width={48} height={48} viewbox="0 0 24 24" classNames="deleteIcon">
    <rect  fill="transparent" stroke-width={"1px"} x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line  x1="9" y1="9" x2="15" y2="15"></line>
    <line  x1="15" y1="9" x2="9" y2="15"></line>
  </Icon>


  <!-- stroke={$light}
stroke={$light}
stroke={$light} -->