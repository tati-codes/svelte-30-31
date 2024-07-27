<script lang="ts">
  import { dark, bg, light, colorp, combineStyles, medium } from "../../Store/color"
  import CloseIconWrapped from "../../lib/Icons/icons/CloseIconWrapped.svelte"

  import ListIcon from "../../lib/Icons/icons/ListIcon.svelte"
  import CloseIcon from "../Timer/TaskCard/taskCardIcons/CloseIcon.svelte"
  import DeleteButton from "./DeleteButton.svelte"
  import PickerLabel from "./PickerLabel.svelte"
  export let name = ""
  export let index: number;
  let select = () => null
  //TODO get rid of this svg bs and just make it flex
  //FIXME pickerlabel -> span
  //FIXME listicon -> give it an svg thing
  //FIXME deletebutton -> same
  
</script>

<div style={combineStyles(bg($dark),`border: 2px solid ${$medium};`)} class="taskListCard fillT" on:click={() => console.log(index)} >
  <ListIcon/>
  <span style={colorp($light)}>{name}</span>
  <CloseIconWrapped/>
</div>

<style>

  
  .taskListCard {
    
    font-size: 1em;
    font-weight: 500;
    margin: auto;
    font-family: inherit;
    cursor: pointer;
    transition: 1s border-color linear;
    transition: 0.27s filter linear;
    display: flex;
    width: 400px;
    height: 105px;
    border-radius: 25px;
    text-align: center;
    display: flex;
    flex-direction: row;
  }
  :global(.taskListCard > .listIcon) {
    margin-top:7.5%;
    margin-left:10%;
    }  
    :global(.taskListCard > .deleteIcon) {
    margin-top:6%;
    margin-right:10%;
    }  

    .taskListCard > span {
      margin-top: 5%;
      font-size: 2rem;
      flex:3;
  }

  div.taskListCard:hover {
    animation: fadeinout 0.7s linear forwards;
    filter: brightness(90%);
  }

  :global(.taskListCard > .deleteIcon) {
    opacity: 30%;
    rotate: 0;
    stroke: white;
    transition: filter 0.325s linear, rotate 0.325s linear, opacity 1s linear;
  }
  :global(.taskListCard:hover > .deleteIcon) {
    /* animation: big 1s linear both; */
    rotate: 90deg;
    scale: 1.2;
    opacity: 1;
    transition: filter 0.325s linear, rotate 0.325s linear, opacity 1s linear;
  }

  :global(.deleteIcon:active) {
    filter:brightness(9%);
    transition: filter 0.325s linear, rotate 0.325s linear, opacity 1s linear;
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
