<script>
  import Icon from "../../../lib/Icons/Icon.svelte"
  import ReplySolidIcon from "../../../lib/Icons/icons/ReplySolidIcon.svelte"
  import TrashIcon from "../../../lib/Icons/icons/TrashIcon.svelte"
  import { onEnter } from "../../../lib/Shared/onEnter"
  import { setView } from "../../../Store/actions/root/setView"
  import { deleteTask } from "../../../Store/actions/taskEdit/deleteTask"
  import { bg, medium } from "../../../Store/color"
  $: bsg = bg($medium);
  const handleGoBackKey = onEnter(() => setView("TIMER"))
  const handleDeleteKey = onEnter(deleteTask)
  //       on:click={swap}
// on:click={() => (swap(), dispatch("delete", {id, changes: null}))}

//swap should set rootStore view to TIMER
//also send delete to taskListstore
//FIXME
//delete should bring you back to timer too
</script>
<div class="bottomBar">
  <li class="tab-li marginright" >
    <div
      class={`background-darken innerSettings`}
      style={bsg}
      role="tab"
      aria-selected="true"
      aria-controls={"icon-panel"}
      on:click={deleteTask}
      on:keypress={handleDeleteKey}
      tabIndex={60}
    >
      <TrashIcon x={0} y={0} height={35} width={40}/>
    </div>
  </li>
  <li class="tab-li background-darken ">
    <div
      style={bsg}
      class={` background-darken innerSettings`}
      role="tab"
      aria-selected="true"
      aria-controls={"icon-panel"}
      tabIndex={61}
      on:click={() => setView("TIMER")}
      on:keypress={handleGoBackKey}
    >
      <ReplySolidIcon x={0} y={0} height={35}/>
    </div>
  </li>
</div>

<style>
    div.innerSettings {
    padding: 14px 21px;
    font-size: 30px;
    font-weight: lighter;
    font-weight: normal;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    -webkit-transition: 0.2s -webkit-filter linear;
    -moz-transition: 0.2s -moz-filter linear;
    -moz-transition: 0.2s filter linear;
    transition: 0.2s filter linear;
    transition: all 0.2s linear;
  }
  </style>