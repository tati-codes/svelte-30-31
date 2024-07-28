<script lang="ts">
  import Icon from "../Icons/Icon.svelte"
  import { bg, combineStyles, dark, light, medium } from "../../Store/color"
  import AddIcon from "../../Views/Timer/TaskCard/taskCardIcons/AddIcon.svelte"
  import TaskBarIcons from "../../Views/Timer/TaskCard/taskCardIcons/TaskBarIcons.svelte"
  export let cb: Function;
</script>

<div style={combineStyles(bg($dark),`border: 2px solid ${$medium};`)} class="taskListCard fillT" on:click={() => cb()} >
  <Icon x={0} y={0} width={48} height={48} viewbox={"0 0 24 24"} classNames="addIcon">
    <rect fill={"transparent"} x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="12" y1="8" x2="12" y2="16"></line>
    <line  x1="8" y1="12" x2="16" y2="12"></line>
  </Icon>
</div>

<style>
  .taskListCard {
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: 1s border-color linear;
    transition: 0.27s filter linear;
    display: flex;
    width: 400px;
    height: 105px;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
  }
  :global(.taskListCard > .addIcon) {
margin:auto;
    font-size: 2rem;
  }
  div.taskListCard:hover {
    animation: fadeinout 0.7s linear forwards;
    filter: brightness(90%);
  }

  :global(.taskListCard > .addIcon) {
    rotate: 0;
    stroke: white;
    opacity: 30%;
    transition: filter 0.325s linear, rotate 0.325s linear, stroke 0.125s linear, opacity 0.1s linear;

  }
  :global(.taskListCard:hover > .addIcon) {
    /* animation: big 1s linear both; */
    rotate: 90deg;
    scale: 1.1;
    opacity:1;
    transition: filter 0.325s linear, rotate 0.225s linear, stroke 0.125s linear, opacity 0.5s linear;
  }
  :global(.addIcon:active) {
    stroke: greenyellow;
    transition: filter 0.325s linear, rotate 0.325s linear, stroke 0.125s linear, opacity 0.5s linear;
  }
@keyframes big {
    100% { 
      rotate: 90deg;
      scale: 1.2;
      opacity: 1;
    }
  }

@keyframes fadeinout {
  100% { border: 2px solid transparent; }
}
@keyframes in {
  100% { opacity: 1; }
}
  div.taskListCard:focus,
  div.taskListCard:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

</style>
