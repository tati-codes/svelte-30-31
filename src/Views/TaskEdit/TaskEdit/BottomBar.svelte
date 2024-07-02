<script>
  import Icon from "../../../lib/Icons/Icon.svelte"
  import ReplySolidIcon from "../../../lib/Icons/icons/ReplySolidIcon.svelte"
  import TrashIcon from "../../../lib/Icons/icons/TrashIcon.svelte"
  import { bg, medium } from "../../../Store/color"
  $: bsg = bg($medium);
//       on:click={swap}
// on:click={() => (swap(), dispatch("delete", {id, changes: null}))}

  //swap should set rootStore view to TIMER
  //also send delete to taskListstore
</script>

<div class="bottomBar">
  <li class="tab-li marginright" >
    <label
      for={"icon"}
      class={`background-darken innerSettings`}
      style={bsg}
      role="tab"
      aria-selected="true"
      aria-controls={"icon-panel"}
      tabIndex={60}
    >
      <TrashIcon x={0} y={0} height={35} width={40}/>
    </label>
  </li>
  <li class="tab-li background-darken ">
    <label
      for={"icon"}
      style={bsg}
      class={` background-darken innerSettings`}
      role="tab"
      aria-selected="true"
      aria-controls={"icon-panel"}
      tabIndex={61}
    >
      <ReplySolidIcon x={0} y={0} height={35}/>
    </label>
  </li>
</div>