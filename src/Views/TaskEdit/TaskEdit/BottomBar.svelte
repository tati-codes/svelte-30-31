<script>
  import Icon from "../../../lib/Icons/Icon.svelte"
  import ReplySolidIcon from "../../../lib/Icons/icons/ReplySolidIcon.svelte"
  import TrashIcon from "../../../lib/Icons/icons/TrashIcon.svelte"
  import { onEnter } from "../../../lib/Shared/onEnter"
  import { setView } from "../../../Store/actions/root/setView"
  import { deleteTask } from "../../../Store/actions/taskEdit/deleteTask"
  import { bg, dark, medium, stroke } from "../../../Store/color"
  import { editingTask } from "../../../Store/taskEdit"
  $: bsg = bg($medium);
  const doDelete = () => {
    deleteTask($editingTask?.id || "missing")
    setView("TIMER")
  }
  const doBack = () => setView("TIMER")
  const handleGoBackKey = onEnter(doBack)
  const handleDeleteKey = onEnter(doDelete)
</script>
<div class="bottomBar">
  <li class="tab-li marginright" >
    <div
      class={`background-darken innerSettings`}
      style={bsg}
      role="button"
      aria-label="delete task and return to timer"
      on:click={doDelete}
      on:keypress={handleDeleteKey}
      tabIndex={60}
    >
      <TrashIcon x={0} y={0} height={35} width={40} stroke={$dark} fill={$dark}/>
    </div>
  </li>
  <li class="tab-li  ">
    <div
      style={bsg}
      class={` background-darken innerSettings`}
      role="button"
      aria-label="accept task and return to timer"
      tabIndex={61}
      on:click={doBack}
      on:keypress={handleGoBackKey}
    >
      <ReplySolidIcon x={0} y={0} height={35} stroke={$dark} fill={$dark}/>
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
  .background-darken {
  background-color: rgba(0, 0, 0, 0);
  -webkit-transition: 0.2s -webkit-filter linear;
  -moz-transition: 0.2s -moz-filter linear;
  -moz-transition: 0.2s filter linear;
  transition: 0.2s filter linear;
  transition: 0.2s all linear;
}
  .background-darken:hover {
  filter: brightness(120%);
  box-shadow: -2px 2px 2px rgba(0,0,0,0.8);
}
  </style>