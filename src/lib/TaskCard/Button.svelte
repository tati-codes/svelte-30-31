<script lang="ts">
  import ComputedTime from "./ComputedTime.svelte"
  import Icon from "./TaskBarIcons.svelte"
  import TaskName from "./TaskName.svelte"
  import Length from "./Length.svelte"
  export let btnType: TASKBAR_ITEM;
</script>

<div class="taskCard" >
  <Icon type={btnType}/>
  <ComputedTime/>
  <TaskName/>
  <Length/>
</div>

<style>
  .taskCard {
    width: 391px;
    height: 105px;
    border-radius: 25px;

    display: grid;
    grid-template-columns: 20% 80%;
    grid-column-gap: 2vw;

    grid-template-rows: 70% 30%;
    gap: 0px 0px;
    grid-template-areas:
    "icon taskName"
    "length cTimes";

    /* padding: 12% 18% 12% 4%; */
    /* margin: 0 1.5fr 1.5fr 1.5fr;
    width: 10fr;
    height: 1fr; */
  }
  
  div.taskCard {
    border: 1px solid transparent;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  div.taskCard:hover {
    border-color: #646cff;
  }
  div.taskCard:focus,
  budiv.taskCard:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
</style>